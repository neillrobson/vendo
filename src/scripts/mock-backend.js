import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import bcrypt from 'bcrypt';

var mock = new MockAdapter(Axios);

const PASSWORD = "letmein";

const DEFAULT_USERS = {
    nerob: {
        password: bcrypt.hashSync("letmein", 10),
        role: "user"
    }
};

class UserStorage {
    constructor(localStorageKey) {
        this.key = localStorageKey;
    }

    getUsers() {
        if (!this.users) {
            let local = localStorage.getItem(this.localStorageKey);
            if (local) {
                this.users = JSON.parse(local);
            } else {
                this.users = DEFAULT_USERS;
                this.setUsers();
            }
        }
        return this.users;
    }

    setUsers() {
        localStorage.setItem(this.localStorageKey, this.users);
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
            return [200, {
                username,
                role: user.role
            }];
        } else {
            return [401, "Incorrect password"];
        }
    });
});