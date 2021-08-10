import Axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
    AUTH_ERROR,
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_UNSET,
    TOKEN,
    LOGIN,
    LOGOUT,
    UPDATE,
    STATUS_SUCCESS,
    STATUS_ERROR,
    STATUS_LOADING,
    PENDO_IDENTIFY,
    REGISTER
} from '../types/auth';
import pendoIdentify from '@/scripts/pendo';

Axios.interceptors.request.use(async config => {
    // Fetch the mock backend chunk from the server. It's big, so we don't want
    // to get it on the initial page load.
    await import(/* webpackChunkName: "mock-backend" */ '@/scripts/mock-backend');
    return config;
});

const state = {
    status: '',
    token: localStorage.getItem('token') || null
};

const getters = {
    isLoggedIn: (state) => state.token != null,
    userData: (state, getters) => {
        if (!getters.isLoggedIn) return {};
        return jwtDecode(state.token);
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
    async [REGISTER](_, info) {
        const response = await Axios.post('register', info);
        return response.status;
    },
    [PENDO_IDENTIFY]({ getters }) {
        if (getters.isLoggedIn) {
            pendoIdentify({
                visitor: {
                    id: getters.username
                },
                account: {
                    id: getters.role
                }
            });
        } else {
            pendoIdentify();
        }
    },
    async [UPDATE]({ commit, dispatch, state }, info) {
        const response = await Axios.put('edit', info, {
            headers: {
                Authorization: `Bearer ${state.token}`
            }
        });
        commit(TOKEN, response.data);
        dispatch(PENDO_IDENTIFY);
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
        state.token = token || null;
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
