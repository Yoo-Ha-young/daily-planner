// src/router.js
import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue' // If not used, remove this line
import LoginPage from '@/views/LoginPage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: ProcessingInstruction.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }]
})

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })