import login from './routes/login'

const routes = [
  ...login
].concat([
  // --- 首页
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  }
])

export default routes
