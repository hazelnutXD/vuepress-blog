---
title: JavaScript 动画打字效果
date: 2021-05-20 19:03:52
tags: 动画库
categories: 前端开发
excerpt: 如何在 Vue 页面中实现动画打字机效果
---

## 简介

JavaScript 动画打字效果

[官方文档](https://www.npmjs.com/package/vue-typed-js)

## 使用

1. 安装依赖

   ```bash
   npm install vue-typed-js
   ```

2. 引入组件

   ```js
   import VueTypedJs from "vue-typed-js";

   Vue.use(VueTypedJs);
   ```

3. 在 VUE 单页面组件中使用

   ```html
   <vue-typed-js :strings="['First text', 'Second Text']">
     <h1 class="typing"></h1>
   </vue-typed-js>
   ```
