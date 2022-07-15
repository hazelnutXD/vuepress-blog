---
title: 封装 axios
date: 2021-12-19 12:04:32
tags: 前后端交互
categories: 前端开发
excerpt: Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
---

## 简介

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

[官方文档](https://axios-http.com/zh/)

## 安装

```bash
npm install axios vue-axios
```

## axios 的基本使用

1. 在主文件引入

   ```js
   import Vue from "vue";
   import axios from "axios";
   import VueAxios from "vue-axios";

   Vue.use(VueAxios, axios);
   ```

2. 在组件中使用

   ```js
   Vue.axios.get(api).then((res) => {
     console.log(res.data);
   });
   ```

## 封装

当面临需要发送多个请求，为解决重复配置 url、header、type 等信息，这时就需要封装请求

1. 创建 request.js 工具类

   ```js
   // src/utils/request.js
   import axios from "axios";

   const service = axios.create({
     baseURL: process.env.VUE_APP_BASE_URL,
     timeout: 3000,
   });

   service.interceptors.request.use((config) => {
     return config;
   });

   service.interceptors.response.use((response) => {
     return response;
   });

   export default service;
   ```

2. 创建请求函数

   ```js
   // src/api/getData.js
   import request from "@/utils/request";

   export function getData(uid) {
     return request({
       url: `${process.env.VUE_APP_BASE_URL}/info/getalldata?uid=${uid}`,
       method: "get",
     });
   }
   ```

3. 调用函数发送请求

   ```js
   import { getData } from "@/api/getData.js";

   export default {
     methods: {
         getData(uid);
     },
   };
   ```
