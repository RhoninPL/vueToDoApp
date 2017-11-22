import Vue from 'vue'
import App from './App'
import router from './router'
import { todoStore } from './stores/todoStore'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCheck } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, faCheck)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: todoStore,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch('getTodos')
  }
})
