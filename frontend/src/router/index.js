import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import forgitpass from '@/page/forgitpass/index.vue'
import publictis from '@/page/activePublic'
import activeMain from '@/page/activeManage'
import header from '@/page/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/forgitpass',
      name: 'forgitpass',
      component: forgitpass
    },
    {
      path: '/',
      name: 'index',
      component: publictis
    },
    {
      path: '/main',
      name: 'main',
      component: activeMain
    },
    {
      path: '/header',
      name: 'header',
      component: header
    }
  ]
})
