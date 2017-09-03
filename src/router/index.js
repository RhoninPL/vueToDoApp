import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ToDo from '@/components/ToDo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: Hello
    },
    {
      path: '/Home/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ToDo/',
      name: 'ToDo',
      component: ToDo
    }
  ]
})
