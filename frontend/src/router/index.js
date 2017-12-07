import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import forgitpass from '@/page/forgitpass/forgitpass.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/forgitpass',
      name: 'forgitpass',
      component: forgitpass
    }
  ]
})
