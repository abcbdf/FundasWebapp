import Vue from 'vue'
import VueZoomer from 'vue-zoomer'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueZoomer)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
