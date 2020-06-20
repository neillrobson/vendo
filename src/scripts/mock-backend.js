import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

var mock = new MockAdapter(Axios);

// This is obviously insecure. Never, ever pass the JWT secret to the frontend.
// We're only doing it in this case to create a mock backend for the demo app.
const SECRET = "secret";
const ROUNDS = 10;

const DEFAULT_USERS = {
    nerob: {
        password: bcrypt.hashSync("letmein", ROUNDS),
        role: "user"
    }
};

class UserStorage {
    constructor(localStorageKey) {
        this.key = localStorageKey;
    }

    getUsers() {
        let local = localStorage.getItem(this.key);
        if (local) {
            return JSON.parse(local);
        } else {
            this.setUsers(DEFAULT_USERS);
            return DEFAULT_USERS;
        }
    }

    setUsers(users) {
        localStorage.setItem(this.key, JSON.stringify(users));
    }
}

var userStorage = new UserStorage("users");

mock.onPost('/login').reply(config => {
    let username;
    let password;
    try {
        let data = JSON.parse(config.data);
        ({ username, password } = data);
    } catch (error) {
        return [400];
    }
    let user = userStorage.getUsers()[username];
    if (!user) {
        return [401, "Unrecognized username"];
    }
    return bcrypt.compare(password, user.password).then(match => {
        if (match) {
            let token = jwt.sign({
                username,
                role: user.role
            }, SECRET);
            return [200, token];
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
    let users = userStorage.getUsers();
    if (users[username]) {
        return [422, "Username already exists"];
    }
    let password = await bcrypt.hash(rawPassword, ROUNDS);
    users[username] = { role, password };
    userStorage.setUsers(users);
    return [201];
});