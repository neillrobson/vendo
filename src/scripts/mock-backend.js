import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(Axios);

const PASSWORD = "letmein";
const TOKEN = "token";

mock.onPost('/login').reply(config => {
    let data = null;
    try {
        data = JSON.parse(config.data);
    } catch (error) {
        return [400];
    }
    if (PASSWORD === data.password) {
        let user = config.data.username ? config.data.username : "Neill-Hardcoded";
        return [200, { user, token: TOKEN }];
    } else {
        return [401];
    }
});