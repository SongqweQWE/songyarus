import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    redirect: "WenChild",
    component: HomeView,
    children: [
      // 首页
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/AboutView.vue")
      },
      // 子路由 文章列表
      {
        path: "/WenChild",
        name: "WenChild",
        component: () => import("@/views/child/WenChild.vue")
      },
      // 多层级路由示例
      {
        path: "/DuoChild",
        name: "DuoChild",
        component: () => import("@/views/child/DuoChild.vue")
      }
    ]
  },
  /* {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" 
  '../views/AboutView.vue')
}, */
  // 登录页面
  {
    path: "/",
    name: "login",
    component: () => import("@/views/LoginView.vue")
  }
]

/* router.beforeEach(function (to, from, next) {
  console.log(to, from)
  if (to.path === "/login") {
    next()
  } else {
    let token = localStorage.getItem("token")
    if (!token) return next({
      path: "/login"
    })
    if (token) return next()
  }
}) */

const router = new VueRouter({
  routes
})

export default router