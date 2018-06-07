import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ahong1 from '@/components/ahong1'
import ahong2 from '@/components/ahong2'
import ahong3 from '@/components/ahong3'
import xutao1 from '@/components/xutao1'
import xutao2 from '@/components/xutao2'
import xutao3 from '@/components/xutao3'
import xutao4 from '@/components/xutao4'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/xutao1',
          name: 'xutao1',
          component: xutao1
        },
        {
          path: '/xutao2',
          component: xutao2
        },
        {
          path: '/xutao3',
          component: xutao3
        },
        {
          path: '/xutao4',
          component: xutao4
        }
      ]
    },
    {
      path: '/ahong1',
      name: 'ahong1',
      component: ahong1
    },
    {
      path: '/ahong2',
      name: 'ahong2',
      component: ahong2
    },
    {
      path: '/ahong3',
      name: 'ahong3',
      component: ahong3
    }
  ]
})
