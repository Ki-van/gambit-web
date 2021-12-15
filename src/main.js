
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
