import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(Axios);

const PASSWORD = "letmein";

mock.onPost('/login').reply(config => {
    return new Promise(resolve => {
        setTimeout(function () {
            let data = null;
            try {
                data = JSON.parse(config.data);
            } catch (error) {
                resolve([400]);
            }
            if (PASSWORD === data.password) {
                resolve([200, { token: data.username }]);
            } else {
                resolve([401]);
            }
        }, 1000);
    });
});