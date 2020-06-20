import Axios from 'axios'
import jwt from 'jsonwebtoken'
import '@/scripts/mock-backend'

Axios.defaults.validateStatus = () => true;

describe("Mock Backend", () => {
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