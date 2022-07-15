---
title: Vue 中路由的使用
date: 2020-12-06 20:14:08
tags: Vue
categories: 前端开发
excerpt: Vue 中路由跳转传参，路由守卫的方法
---

## 路由跳转传参

### 命名路由使用 params 接收

```js
//路由
{
  path: "/detail/:id";
  name: "detail";
}
//传参
this.$router.push({
  name: "detail",
  params: {
    id: id,
  },
});
//接收参数
this.$route.params.id;
```

### 使用 query 接收

```js
//路由
{
  path: "/detail";
}
//传参
this.$router.push(`/detail?id=${id}`);
//接收参数
this.$route.query.id;
```

## 导航守卫

用于跳转拦截

```js
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.getItem("token");
  if (to.path == "/my") {
    if (isLogin) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
```
