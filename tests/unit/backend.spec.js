import Axios from 'axios'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import '@/scripts/mock-backend'

Axios.defaults.validateStatus = () => true;

const DEFAULT_USERS = {
    nerob: {
        password: bcrypt.hashSync("letmein", 10),
        role: "user"
    }
};

describe("Mock Login", () => {
    test("Login with valid credentials", async () => {
        const response = await Axios.post("login", {
            username: "nerob",
            password: "letmein"
        });
        expect(response.status).toBe(200);
        let data = jwt.decode(response.data);
        expect(data.username).toBe("nerob");
        expect(data.role).toBe("user");
    })

    test("Login with ill-formed data", async () => {
        const response = await Axios.post("login", "ill-formed");
        expect(response.status).toBe(400);
    })

    test("Unknown username", async () => {
        const response = await Axios.post("login", {
            username: "notauser",
            password: "letmein"
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("username");
    })

    test("Invalid password", async () => {
        const response = await Axios.post("login", {
            username: "nerob",
            password: "bad-password"
        });
        expect(response.status).toBe(401);
        expect(response.data).toContain("password");
    })
})

describe("Mock Register", () => {
    beforeEach(() => {
        localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));
    })

    test("Valid request", async () => {
        const response = await Axios.post("register", {
            username: "ajax",
            password: "lastpass",
            role: "frontend"
        });
        expect(response.status).toBe(201);
        let users = JSON.parse(localStorage.getItem("users"));
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
            username: "nerob",
            password: "lastpass",
            role: "frontend"
        });
        expect(response.status).toBe(422);
    })
})