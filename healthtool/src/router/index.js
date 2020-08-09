import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import BMI from '../views/BMI.vue'
import IntestinalCheck from '../views/IntestinalCheck.vue'
import { languages } from '@/plugins/i18n'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    name: 'Lang',
    component: { render (c) { return c('router-view') } },
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (languages.includes(lang)) {
        if (store.state.locale !== lang) {
          store.dispatch('changeLocale', lang)
        }
        return next()
      }
      return next({ path: store.state.locale })
    },
    children: [
      {
        path: '',
        name: 'il8n | Home',
        component: Home
      },
      {
        path: 'bmi-check',
        name: 'il8n | BMI',
        component: BMI
      },
      {
        path: 'intestinal-age-check',
        name: 'il8n | Intestinal',
        component: IntestinalCheck
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter (to, from, next) {
      next(store.state.locale)
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bmi-check',
    name: 'BMI Check',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BMI.vue')
  },
  {
    path: '/intestinal-age-check',
    name: 'Intestinal Age Check',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/IntestinalCheck.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes
})

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  const { lang } = to.params
  document.querySelector('html').setAttribute('lang', lang)
  next()
})

export default router
