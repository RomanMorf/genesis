import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/style.scss'

import shortNumber from '@/filters/shortNumber.filter.js'
import Loader from '@/components/Loader'

Vue.component('Loader', Loader)

Vue.config.productionTip = false

Vue.filter('short', shortNumber)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
