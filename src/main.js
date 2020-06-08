import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { ConfigProgrammatic, Icon, Button, Field, Input } from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Input);

library.add(faEdit, faTrash, faPlus);
Vue.component('vue-fontawesome', FontAwesomeIcon);
ConfigProgrammatic.setOptions({
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
