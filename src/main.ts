import '@assets/stylesheets/plugins/antd/antd.less';
import '@assets/stylesheets/app.scss';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import { apolloProvider } from '@api';
import router from '@routers';
import store from '@stores';
import i18n from '@locales';
import '@plugins';
import '@filters';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
