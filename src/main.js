import Vue from 'vue'
import Axios from 'axios'
import store from './store'
import router from './router'
import App from './App.vue'

import { publicPath } from '../vue.config'
import 'semantic-ui-css/semantic.min.css'
import './scripts/mock-backend'
import { INIT_USER } from './store/types/user'

Axios.defaults.baseURL = publicPath
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit(INIT_USER)
  }
}).$mount('#app')
