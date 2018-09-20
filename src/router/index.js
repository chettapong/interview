import Vue from 'vue'
import Router from 'vue-router'
import Usermanage from '@/components/Usermanage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Userresource from '@/components/Userresource'
import Uresourcelist from '@/components/Uresourcelist'
import List from '@/components/List'

// import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      alias: '/',
      component: Userresource
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/listresource',
      component: List
    },
    {
      path: '/Uresourcelist',
      component: Uresourcelist
    },
    {
      path: '/Usermanage',
      component: Usermanage
    }
  ]
})
