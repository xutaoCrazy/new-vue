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
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Parms from '@/components/parms'
import Error from '@/components/error'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      },
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
      path: '/xutao',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      },
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
    },
    {
      // path: '/parms/:newid/:titele',
      // path: '/params/:newsId/:newsTitle',
      path: '/xutao/:id/:title',
      component: Parms,
      beforeEnter: (to, from, next) => { // 路由里面钩子函数
        console.log('我进入了params模板')
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path: '/gohome',
      redirect: '/'
    },
    {
      path: '/xutao/:id/:title',
      redirect: '/xutao/:id/:title'
    },
    {
      path: '/hi',
      component: Hi1,
      alias: '/bossxu'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
