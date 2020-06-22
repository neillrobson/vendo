import Axios from 'axios'
import jwt from 'jsonwebtoken'
import {
    AUTH_ERROR,
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_UNSET,
    TOKEN,
    LOGIN,
    LOGOUT,
    STATUS_SUCCESS,
    STATUS_ERROR,
    STATUS_LOADING,
    PENDO_IDENTIFY
} from '../types/auth'
import pendoIdentify from "@/scripts/pendo";

const state = {
    status: '',
    token: localStorage.getItem('token') || null
};

const getters = {
    isLoggedIn: (state) => state.token != null,
    userData: (state, getters) => {
        if (!getters.isLoggedIn) return {};
        return jwt.decode(state.token);
    },
    username: (_state, getters) => {
        return getters.userData.username;
    },
    role: (_state, getters) => {
        return getters.userData.role;
    }
};

const actions = {
    [LOGIN]({ commit, dispatch }, info) {
        return new Promise((resolve, reject) => {
            commit(TOKEN, null);
            commit(AUTH_LOADING);
            Axios.post('login', info)
            .then(response => {
                commit(TOKEN, response.data);
                commit(AUTH_SUCCESS);
                dispatch(PENDO_IDENTIFY);
                resolve(response);
            })
            .catch(error => {
                commit(AUTH_ERROR);
                reject(error);
            });
        });
    },
    [LOGOUT]({ commit }) {
        return new Promise(resolve => {
            commit(TOKEN, null);
            commit(AUTH_UNSET);
            resolve();
        });
    },
    [PENDO_IDENTIFY]({ getters }) {
        pendoIdentify({ visitor: { id: getters.username } });
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
    [AUTH_UNSET](state) {
        state.status = '';
    },
    [TOKEN](state, token) {
        state.token = token ? token : null;
        if (state.token) {
            localStorage.setItem('token', state.token);
        } else {
            localStorage.removeItem('token');
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};