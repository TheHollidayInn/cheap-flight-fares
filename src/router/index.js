import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Subscription from '@/components/Subscription'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/subscribe',
      name: 'Subscription',
      component: Subscription
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/signup',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
