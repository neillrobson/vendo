import { createApp } from 'vue';
import Axios from 'axios';
import store from './store';
import router from './router';
import App from './App.vue';

Axios.defaults.baseURL = process.env.BASE_URL;

const app = createApp({
    router,
    ...App
});

app.use(store);

app.mount('#app');
