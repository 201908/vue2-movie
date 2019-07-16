// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { XHeader, XInput, XButton, Group, ConfirmPlugin, ToastPlugin, Selector } from 'vux'
Vue.component('x-header', XHeader)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('group', Group)
Vue.component('selector', Selector)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)

import axios from 'axios'
axios.defaults.baseURL = 'https://wd8716077287svpjzp.wilddogio.com'
Vue.prototype.$http = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
