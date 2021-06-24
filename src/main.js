import { createApp } from 'vue';
import Axios from 'axios';
import store from './store';
import router from './router';
import App from './App.vue';

Axios.defaults.baseURL = process.env.BASE_URL;

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
