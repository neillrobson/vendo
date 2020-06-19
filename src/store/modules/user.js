import { LOCAL_STORAGE_USER_ID, INIT_USER, SET_USERNAME, SET_ROLE } from '../types/user';

const state = {
    username: null,
    role: null
};

const mutations = {
    [INIT_USER](state) {
        let local = localStorage.getItem(LOCAL_STORAGE_USER_ID);
        if (local) {
            this.replaceState(
                Object.assign(state, JSON.parse(local))
            );
        }
    },
    [SET_USERNAME](state, username) {
        state.username = username;
    },
    [SET_ROLE](state, role) {
        state.role = role;
    }
}

export default {
    state,
    mutations
};