import Vue from 'vue'
import Axios from 'axios'
import store from './store'
import router from './router'
import App from './App.vue'

import { publicPath } from '../vue.config'
import 'semantic-ui-css/semantic.min.css'
import './scripts/mock-backend'

Axios.defaults.baseURL = publicPath
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
