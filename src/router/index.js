import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/view/Shop'
import cart from '@/view/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {path : '/',component: Shop},
    {path: '/cart',component:  cart},
    
  ]
})
