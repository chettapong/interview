import Vue from 'vue'
import Router from 'vue-router'
import Usermanage from '@/components/Usermanage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Userresource from '@/components/Userresource'
import test from '@/components/test'
import list from '@/components/list'

// import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      alias: '/',
      component: Usermanage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/listresource',
      component: Userresource
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/list',
      component: list
    }
  ]
})
