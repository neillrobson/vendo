import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import auth from './modules/auth'
import user from './modules/user'
import { LOCAL_STORAGE_USER_ID } from './types/user'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todo,
    auth,
    user
  }
});

store.subscribe((mutation, state) => {
  if (mutation.type.startsWith("user")) {
    localStorage.setItem(LOCAL_STORAGE_USER_ID, JSON.stringify(state.user));
  }
});

export default store;
