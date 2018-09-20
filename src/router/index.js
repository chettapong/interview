import Vue from 'vue'
import Router from 'vue-router'
import Usermanage from '@/components/Usermanage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Userresource from '@/components/Userresource'
import Listresaource from '@/components/Listresaource'
import Listdata from '@/components/List'

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
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/listresource',
      component: Listresaource
    },
    {
      path: '/Usermanage',
      component: Usermanage
    },
    {
      path: '/listdata',
      component: Listdata
    }
  ]
})
