import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/LandingPage.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/auth',
    name: 'Auth',
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
        meta: { title: '登录' }
      },
      {
        path: 'register',
        name: 'Register',
        redirect: '/auth/register/navigation',
        children: [
          {
            path: 'navigation',
            name: 'RegisterNavigation',
            component: () => import('@/views/auth/register/Navigation.vue'),
            meta: { title: '注册导航' }
          },
          {
            path: 'phone',
            name: 'RegisterPhone',
            component: () => import('@/views/auth/register/PhoneRegister.vue'),
            meta: { title: '手机号注册' }
          },
          {
            path: 'phone-confirm',
            name: 'RegisterPhoneConfirm',
            component: () => import('@/views/auth/register/PhoneConfirm.vue'),
            meta: { title: '手机号密码确认' }
          },
          {
            path: 'email',
            name: 'RegisterEmail',
            component: () => import('@/views/auth/register/EmailRegister.vue'),
            meta: { title: '邮箱注册' }
          },
          {
            path: 'email-confirm',
            name: 'RegisterEmailConfirm',
            component: () => import('@/views/auth/register/EmailConfirm.vue'),
            meta: { title: '邮箱密码确认' }
          }
        ]
      },
      {
        path: 'forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
        meta: { title: '忘记密码' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '页面不存在' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫 - 设置页面标题
router.beforeEach((to) => {
  document.title = `${to.meta.title} - CDE Login`
})

export default router