import { createStore } from 'vuex';
import todo from './modules/todo';
import auth from './modules/auth';

const store = createStore({
    modules: {
        todo,
        auth
    }
});

export default store;
