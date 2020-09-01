import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
import routeMaps from './config'

Vue.use(VueRouter)

// 全局路由钩子函数,判断路由是否需要登录是否需要token
// VueRouter.beforeEach((to, from, next) => {
//   let auth = to.meta.auth
//   let token = store.getters['login/token']
//   if (auth) {
//     if (token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

// 公共路由配置
let Common = [{
  path: '/',
  redirect: '/home'
}]

// 统一处理页面
const Handler = [{
  path: '/500',
  name: '500',
  component: () => import('@/components/500/index.vue')
},
{
  path: '*',
  name: '404',
  component: () => import('@/components/404/index.vue')
}

]

// Handler 必须放最后
const routes = Common.concat(routeMaps, Handler)

const router = new VueRouter({
  routes
})

export default router
