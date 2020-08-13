import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import VueMeta from 'vue-meta'

// import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
