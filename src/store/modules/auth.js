import axios from 'axios';
import {
    AUTH_ERROR,
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_UNSET,
    VISITOR,
    ACCOUNT,
    LOGIN,
    LOGOUT,
    STATUS_SUCCESS,
    STATUS_ERROR,
    STATUS_LOADING,
    PENDO_IDENTIFY
} from '../types/auth';
import { pendoIdentify, pendoClearSession } from '@/scripts/pendo';
import { boundedBell } from '@/scripts/util';
import { pick } from 'lodash';

const TS_SECONDS = [1503510363, 1685453018, 1595459018];
const TS_MILLISECONDS = [1503510363000, 1685453018000, 1595459018000];

function getVisitorData(res) {
    return {
        id: res.login.username,
        firstName: res.name.first,
        lastName: res.name.last,
        gender: res.gender,
        dob: res.dob.date,
        age: res.dob.age,
        nat: res.nat,
        tsSeconds: TS_SECONDS[res.dob.age % 3],
        tsMilliseconds: TS_MILLISECONDS[res.dob.age % 3]
    };
}

function getAccountData(res) {
    return {
        id: res.nat
    };
}

function getLocalStorageObject(key, fallback = null) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return fallback;
    }
}

function setLocalStorageObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

const state = {
    status: '',
    visitor: getLocalStorageObject('visitor'),
    account: getLocalStorageObject('account')
};

const getters = {
    isLoggedIn: (state) => state.visitor != null,
    visitorId: (state) => {
        return state.visitor.id;
    },
    accountId: (state) => {
        return state.account.id;
    }
};

const actions = {
    async [LOGIN]({ commit, dispatch }) {
        commit(AUTH_LOADING);

        try {
            const response = await axios(
                `https://randomuser.me/api/?seed=${Math.floor(
                    boundedBell(0, 100)
                )}`
            );
            if (response.data.error) {
                throw new Error(response.data.error);
            }

            commit(VISITOR, getVisitorData(response.data.results[0]));
            commit(ACCOUNT, getAccountData(response.data.results[0]));
            commit(AUTH_SUCCESS);
            dispatch(PENDO_IDENTIFY);
            return response;
        } catch (error) {
            commit(AUTH_ERROR);
            throw error;
        }
    },
    [LOGOUT]({ commit }) {
        commit(VISITOR);
        commit(ACCOUNT);
        commit(AUTH_UNSET);
        pendoClearSession();
    },
    [PENDO_IDENTIFY]({ state, getters }) {
        if (getters.isLoggedIn) {
            pendoIdentify(pick(state, 'visitor', 'account'));
        } else {
            pendoIdentify();
        }
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
    [VISITOR](state, data) {
        state.visitor = data;
        if (state.visitor) {
            setLocalStorageObject('visitor', state.visitor);
        } else {
            localStorage.removeItem('visitor');
        }
    },
    [ACCOUNT](state, data) {
        state.account = data;
        if (state.account) {
            setLocalStorageObject('account', state.account);
        } else {
            localStorage.removeItem('account');
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
