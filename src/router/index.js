import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/",
        name: "首页",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/组件",
        name: "组件",
        children: [
          {
            path: "/form",
            name: "form表单",
            component: () => import("../views/form/index.vue"),
          },
          // {
          // 	path: '/table',
          // 	name: 'table表格',
          // 	component: () => import('../views/table/index.vue'),
          // },
          {
            path: "/echart",
            name: "echart图标",
            component: () => import("../views/echart/index.vue"),
          },
        ],
      },
      {
        path: "/user",
        name: "用户",
        component: () => import("../views/user/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局守卫：登录拦截 本地没有存token,请重新登录
router.beforeEach((to, from, next) => {
  // 判断有没有登录
  if (!localStorage.getItem("token")) {
    if (to.name == "login") {
      next();
    } else {
      router.push("login");
    }
  } else {
    next();
  }
});

export default router;
