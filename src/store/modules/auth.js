import Axios from 'axios'
import {
    AUTH_ERROR,
    AUTH_LOADING,
    AUTH_SUCCESS,
    TOKEN,
    LOGIN,
    STATUS_SUCCESS,
    STATUS_ERROR,
    STATUS_LOADING
} from '../types/auth'

const state = {
    status: '',
    token: localStorage.getItem('token') || null
};

const getters = {
    isLoggedIn: (state) => state.token != null
};

const actions = {
    [LOGIN]({ commit }, info) {
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
    [AUTH_SUCCESS](state) {
        state.status = STATUS_SUCCESS;
    },
    [AUTH_ERROR](state) {
        state.status = STATUS_ERROR;
    },
    [AUTH_LOADING](state) {
        state.status = STATUS_LOADING;
    },
    [TOKEN](state, token) {
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