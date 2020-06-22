import Axios from 'axios'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { LOCAL_STORAGE_KEY } from '@/scripts/mock-backend'

Axios.defaults.validateStatus = () => true;

const DEFAULT_USERNAME = "nerob";
const DEFAULT_PASSWORD = "letmein";
const DEFAULT_ROLE = "user";
const DEFAULT_USERNAME_2 = "dab";
const DEFAULT_PASSWORD_2 = "keepass";
const DEFAULT_ROLE_2 = "frontend";
const DEFAULT_USERS = {
    [DEFAULT_USERNAME]: {
        password: bcrypt.hashSync(DEFAULT_PASSWORD, 10),
        role: DEFAULT_ROLE
    },
    [DEFAULT_USERNAME_2]: {
        password: bcrypt.hashSync(DEFAULT_PASSWORD_2, 10),
        role: DEFAULT_ROLE_2
    }
};

describe("Mock Login", () => {
    beforeEach(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
    })

    test("Login with valid credentials", async () => {
        const response = await Axios.post("login", {
            username: DEFAULT_USERNAME,
            password: DEFAULT_PASSWORD
        });
        expect(response.status).toBe(200);
        let data = jwt.decode(response.data);
        expect(data.username).toBe(DEFAULT_USERNAME);
        expect(data.role).toBe(DEFAULT_ROLE);
    })

    test("Login with ill-formed data", async () => {
        const response = await Axios.post("login", "ill-formed");
        expect(response.status).toBe(400);
    })

    test("Unknown username", async () => {
        const response = await Axios.post("login", {
            username: "notauser",
            password: DEFAULT_PASSWORD
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("username");
    })

    test("Invalid password", async () => {
        const response = await Axios.post("login", {
            username: DEFAULT_USERNAME,
            password: "bad-password"
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("password");
    })

    test("Login with no data in local storage", async () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        const response = await Axios.post("login", {
            username: DEFAULT_USERNAME,
            password: DEFAULT_PASSWORD
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("username");
    })
})

describe("Mock Register", () => {
    beforeEach(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
    })

    test("Valid request", async () => {
        const response = await Axios.post("register", {
            username: "ajax",
            password: "lastpass",
            role: "frontend"
        });
        expect(response.status).toBe(201);
        let users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        expect(users["ajax"]).toBeDefined();
    })

    test("Invalid request", async () => {
        const response = await Axios.post("register", {
            username: "ajax",
            role: "frontend"
        });
        expect(response.status).toBe(400);
    })

    test("Duplicate username", async () => {
        const response = await Axios.post("register", {
            username: DEFAULT_USERNAME,
            password: "lastpass",
            role: "frontend"
        });
        expect(response.status).toBe(422);
    })
})

describe("Mock Edit User", () => {
    let nerobToken;

    beforeAll(async () => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
        const response = await Axios.post("login", {
            username: DEFAULT_USERNAME,
            password: DEFAULT_PASSWORD
        });
        nerobToken = response.data;
    })

    beforeEach(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
    })

    test("No auth header", async () => {
        const response = await Axios.put("edit", {
            username: "ajax",
            role: "backend"
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("No authorization");
    })

    test("Wrong scheme", async () => {
        const token = Buffer.from(`${DEFAULT_USERNAME}:${DEFAULT_PASSWORD}`, "utf8").toString("base64");
        const response = await Axios.put("edit", {
            username: "ajax",
            role: "backend"
        }, {
            headers: {
                Authorization: `Basic ${token}`
            }
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("does not follow \"Bearer\"");
    })

    test("Invalid JWT", async () => {
        const token = jwt.sign({
            username: DEFAULT_USERNAME,
            role: DEFAULT_ROLE
        }, "not-the-secret");
        const response = await Axios.put("edit", {
            username: "ajax",
            role: "backend"
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("Invalid JWT");
    })

    test("Invalid data", async () => {
        const response = await Axios.put("edit", "N0T }$0N", {
            headers: {
                Authorization: `Bearer ${nerobToken}`
            }
        });
        expect(response.status).toBe(400);
    })

    test("Duplicate username", async () => {
        const response = await Axios.put("edit", {
            username: DEFAULT_USERNAME_2,
            role: "backend"
        }, {
            headers: {
                Authorization: `Bearer ${nerobToken}`
            }
        });
        expect(response.status).toBe(422);
    })

    test("Change password", async () => {
        const NEW_PASSWORD = "@x10$";
        let response = await Axios.put("edit", {
            password: NEW_PASSWORD
        }, {
            headers: {
                Authorization: `Bearer ${nerobToken}`
            }
        });
        expect(response.status).toBe(200);
        response = await Axios.post("login", {
            username: DEFAULT_USERNAME,
            password: NEW_PASSWORD
        });
        expect(response.status).toBe(200);
    })

    test("Change username", async () => {
        const NEW_USERNAME = "ajax";
        let response = await Axios.put("edit", {
            username: NEW_USERNAME
        }, {
            headers: {
                Authorization: `Bearer ${nerobToken}`
            }
        });
        expect(response.status).toBe(200);
        response = await Axios.post("login", {
            username: NEW_USERNAME,
            password: DEFAULT_PASSWORD
        });
        expect(response.status).toBe(200);
    })

    test("Change everything", async () => {
        const NEW_ROLE = "Supreme Dictator";
        const NEW_USERNAME = "ajax";
        const NEW_PASSWORD = "super-secure";
        let response = await Axios.put("edit", {
            role: NEW_ROLE,
            username: NEW_USERNAME,
            password: NEW_PASSWORD
        }, {
            headers: {
                Authorization: `Bearer ${nerobToken}`
            }
        });
        expect(response.status).toBe(200);
        response = await Axios.post("login", {
            username: NEW_USERNAME,
            password: NEW_PASSWORD
        });
        expect(response.status).toBe(200);
        let data = jwt.decode(response.data);
        expect(data.username).toBe(NEW_USERNAME);
        expect(data.role).toBe(NEW_ROLE);
    })
})