import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

var mock = new MockAdapter(Axios);

export const LOCAL_STORAGE_KEY = "users";

// This is obviously insecure. Never, ever pass the JWT secret to the frontend.
// We're only doing it in this case to create a mock backend for the demo app.
const SECRET = "secret";
const ROUNDS = 10;

class UserStorage {
    constructor(localStorageKey) {
        this.key = localStorageKey;
    }

    get users() {
        let local = localStorage.getItem(this.key);
        if (local) {
            return JSON.parse(local);
        } else {
            this.users = {};
            return this.users;
        }
    }

    set users(users) {
        localStorage.setItem(this.key, JSON.stringify(users));
    }
}

var userStorage = new UserStorage(LOCAL_STORAGE_KEY);

function getTokenForUser(username) {
    let user = userStorage.users[username];
    return jwt.sign({
        username,
        role: user.role
    }, SECRET);
}

mock.onPost('/login').reply(config => {
    let username;
    let password;
    try {
        let data = JSON.parse(config.data);
        ({ username, password } = data);
    } catch (error) {
        return [400];
    }
    let user = userStorage.users[username];
    if (!user) {
        return [401, "Unrecognized username"];
    }
    return bcrypt.compare(password, user.password).then(match => {
        if (match) {
            return [200, getTokenForUser(username)];
        } else {
            return [401, "Incorrect password"];
        }
    });
});

mock.onPost('/register').reply(async config => {
    let username, role, rawPassword;
    try {
        let data = JSON.parse(config.data);
        ({ username, role, password: rawPassword } = data);
        if (!username || !role || !rawPassword) {
            throw "Missing required field";
        }
    } catch (error) {
        return [400];
    }
    let users = userStorage.users;
    if (users[username]) {
        return [422, "Username already exists"];
    }
    let password = await bcrypt.hash(rawPassword, ROUNDS);
    users[username] = { role, password };
    userStorage.users = users;
    return [201];
});

mock.onPut("/edit").reply(async config => {
    // ### Authorization ###
    const BEARER_PREFIX = 'Bearer ';
    let auth = config.headers.Authorization;
    if (!auth) {
        return [401, "No authorization header given"];
    }
    if (!auth.startsWith(BEARER_PREFIX)) {
        return [401, "Authorization header does not follow \"Bearer\" scheme"];
    }
    let token = auth.substring(BEARER_PREFIX.length);
    let payload;
    try { 
        payload = jwt.verify(token, SECRET);
    } catch (error) {
        return [401, "Invalid JWT"];
    }

    // ### Data Initialization ###
    let oldUsername = payload.username;
    let data;
    try {
        data = JSON.parse(config.data);
    } catch (error) {
        return [400];
    }
    let username, role, rawPassword;
    ({ username, role, password: rawPassword } = data);
    let users = userStorage.users;

    // ### User Modification ###
    if (username && username !== oldUsername) {
        if (users[username]) {
            return [422, "Username already exists"];
        }
        users[username] = users[oldUsername];
        delete users[oldUsername];
    } else {
        username = oldUsername;
    }
    if (rawPassword) {
        users[username].password = await bcrypt.hash(rawPassword, ROUNDS);
    }
    users[username].role = role || users[username].role;
    userStorage.users = users;
    return [200, getTokenForUser(username)];
});