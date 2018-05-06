import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
//import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
//import 'vuetify/src/stylus/main'

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
