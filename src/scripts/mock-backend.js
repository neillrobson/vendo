import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/* eslint-disable no-throw-literal */

const mock = new MockAdapter(Axios);

export const LOCAL_STORAGE_KEY = 'users';

// This is obviously insecure. Never, ever pass the JWT secret to the frontend.
// We're only doing it in this case to create a mock backend for the demo app.
const SECRET = 'secret';
const ROUNDS = 10;

class UserStorage {
    constructor(localStorageKey) {
        this.key = localStorageKey;
    }

    get users() {
        const local = localStorage.getItem(this.key);
        return local ? JSON.parse(local) : {};
    }

    set users(users) {
        localStorage.setItem(this.key, JSON.stringify(users));
    }

    createUser(data) {
        const users = this.users;
        if (users[data.username]) {
            throw 'Username already exists';
        }
        users[data.username] = data;
        this.users = users;
    }

    readUser(name) {
        return this.users[name];
    }

    updateUser(data) {
        const users = this.users;
        if (!users[data.username]) {
            throw "User with given username doesn't exist";
        }
        users[data.username] = data;
        this.users = users;
    }

    deleteUser(name) {
        const users = this.users;
        delete users[name];
        this.users = users;
    }
}

const userStorage = new UserStorage(LOCAL_STORAGE_KEY);

function getTokenForUser(user) {
    return jwt.sign({
        username: user.username,
        role: user.role
    }, SECRET);
}

/**
 * Check the integrity of the authorization header, and return the authorized
 * user if the header is valid
 * @param {String} auth The authorization header
 */
function verifyAuthHeader(auth) {
    const BEARER_PREFIX = 'Bearer ';
    if (!auth) {
        throw 'No authorization header given';
    }
    if (!auth.startsWith(BEARER_PREFIX)) {
        throw 'Authorization header does not follow "Bearer" scheme';
    }
    const token = auth.substring(BEARER_PREFIX.length);
    let payload;
    try {
        payload = jwt.verify(token, SECRET);
    } catch (error) {
        throw 'Invalid JWT';
    }
    const currentUsername = payload.username;
    const user = userStorage.readUser(currentUsername);
    if (!user) {
        throw 'Invalid JWT';
    }
    return user;
}

mock.onPost('/login').reply(config => {
    let username;
    let password;
    try {
        const data = JSON.parse(config.data);
        ({ username, password } = data);
    } catch (error) {
        return [400];
    }
    const user = userStorage.readUser(username);
    if (!user) {
        return [401, 'Unrecognized username'];
    }
    return bcrypt.compare(password, user.password).then(match => {
        if (match) {
            return [200, getTokenForUser(user)];
        } else {
            return [401, 'Incorrect password'];
        }
    });
});

mock.onPost('/register').reply(async config => {
    let username, role, rawPassword;
    try {
        const data = JSON.parse(config.data);
        ({ username, role, password: rawPassword } = data);
        if (!username || !role || !rawPassword) {
            throw 'Missing required field';
        }
    } catch (error) {
        return [400];
    }
    const password = await bcrypt.hash(rawPassword, ROUNDS);
    try {
        userStorage.createUser({ username, role, password });
    } catch (error) {
        return [422, error];
    }
    return [201];
});

/**
 * Modify the currently logged-in user.
 *
 * Schema for request body:
 * data = {
 *     currentPassword: String
 *     userInfo: {
 *         username: String
 *         role: String
 *         newPassword: String
 *     }
 * }
 */
mock.onPut('/edit').reply(async config => {
    // ### Authorization ###
    let user;
    try {
        user = verifyAuthHeader(config.headers.Authorization);
    } catch (errorMessage) {
        return [401, errorMessage];
    }
    let data;
    try {
        data = JSON.parse(config.data);
    } catch (error) {
        return [400, 'Could not parse request body as JSON'];
    }
    const currentRawPassword = data.currentPassword;
    if (!currentRawPassword || !await bcrypt.compare(currentRawPassword, user.password)) {
        return [401, 'Incorrect password'];
    }

    // ### Data Initialization ###
    const userInfo = data.userInfo;
    if (!userInfo || typeof userInfo !== 'object') {
        return [400, 'Could not parse user information from request body'];
    }
    const newUsername = userInfo.username;
    const newRole = userInfo.role;
    const newRawPassword = userInfo.password;
    const oldUsername = user.username;

    // ### User Modification ###
    if (newUsername && newUsername !== oldUsername) {
        user.username = newUsername;
        userStorage.deleteUser(oldUsername);
        try {
            userStorage.createUser(user);
        } catch (error) {
            return [422, error];
        }
    }
    if (newRawPassword) {
        user.password = await bcrypt.hash(newRawPassword, ROUNDS);
    }
    user.role = newRole || user.role;
    userStorage.updateUser(user);
    return [200, getTokenForUser(user)];
});
