import Vue from 'vue'
import Router from 'vue-router'
import IntroduceComponent from '@/components/IntroduceComponent'
import ProductComponent from '@/components/ProductComponent'
import LocationComponent from '@/components/LocationComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/introduce',
      name: 'introduce-component',
      component: IntroduceComponent
    },
    {
      path: '/product',
      name: 'product-component',
      component: ProductComponent
    },
    {
      path: '/location',
      name: 'location-component',
      component: LocationComponent
    }
  ]
})
