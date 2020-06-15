import Vue from 'vue'
import Axios from 'axios'
import store from './store'
import router from './router'
import App from './App.vue'

import 'semantic-ui-css/semantic.min.css'
import './scripts/pendo'

Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
