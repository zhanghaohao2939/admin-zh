import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import qs from 'qs';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(axios);
Vue.config.productionTip = false;
Vue.prototype.bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
