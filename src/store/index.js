import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import auth from './modules/auth'
import user from './modules/user'
import persist from '@/scripts/local-persistence'
import { USER_MUTATION_PREFIX, LOCAL_STORAGE_USER_ID } from './types/user'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todo,
    auth,
    user
  }
});

persist(store, "user", USER_MUTATION_PREFIX, LOCAL_STORAGE_USER_ID);

export default store;
