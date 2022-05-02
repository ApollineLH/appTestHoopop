import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {path : '/',component: Shop},
    {path: '/cart',component:  cart},
    
  ]
})
