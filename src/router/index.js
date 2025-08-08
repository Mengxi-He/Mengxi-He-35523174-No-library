import { createRouter, createWebHistory } from 'vue-router'
import LoginView  from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'
const routes = [

  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView // 异步加载组件
  },
  {
    path: '/FireLogin',
    name: 'FireLogin', 
    component: FirebaseSigninView // 异步加载组件
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI
  },
  {
    path: '/login',
    name: 'Login',//name是可选值 你也可以用 router.push({ name: 'About' }) 跳转
    component: LoginView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,//路由命中时显示的 Vue 组件（一般是 AboutView.vue）
    meta: { requiresAuth: true }//元信息，自定义字段：表示这个页面需要登录权限，后面可以用来做访问控制
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router