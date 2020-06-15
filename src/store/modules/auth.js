import Axios from 'axios'

const AUTH_SUCCESS = "auth_success";
const AUTH_ERROR = "auth_error";
const AUTH_LOADING = "auth_loading";
const LOGIN = "login";
const TOKEN = "token";

const STATUS_SUCCESS = "success";
const STATUS_ERROR = "error";
const STATUS_LOADING = "loading";

const state = {
    status: '',
    token: localStorage.getItem('token') || null
};

const getters = {
    isLoggedIn: (state) => state.token != null
};

const actions = {
    [LOGIN]: ({ commit }, info) => {
        return new Promise((resolve, reject) => {
            commit(TOKEN, null);
            commit(AUTH_LOADING);
            Axios.post('login', info)
            .then(response => {
                commit(TOKEN, response.data.token);
                commit(AUTH_SUCCESS);
                resolve(response);
            })
            .catch(error => {
                commit(AUTH_ERROR);
                reject(error);
            });
        });
    }
};

const mutations = {
    [AUTH_SUCCESS]: (state) => {
        state.status = STATUS_SUCCESS;
    },
    [AUTH_ERROR]: (state) => {
        state.status = STATUS_ERROR;
    },
    [AUTH_LOADING]: (state) => {
        state.status = STATUS_LOADING;
    },
    [TOKEN]: (state, token) => {
        state.token = token ? token : null;
        localStorage.setItem('token', state.token);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};