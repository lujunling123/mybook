import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import forgitpass from '@/page/forgitpass/index.vue'
import publictis from '@/page/activePublic'
import activeMain from '@/page/activeManage'
import header from '@/page/header'
import shouye from '@/page/shouye'
import wodeshoucang from '@/page/wodeshoucang'

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
      component: publictis,
      children: [
        {
          path: 'shouye',
          component: shouye,
          name: 'shouye'
        },
        {
          path: 'wodeshoucang',
          component: wodeshoucang,
          name: 'wodeshoucang'
        }
      ]
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
