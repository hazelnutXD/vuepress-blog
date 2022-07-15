---
title: Vue 项目中的全局变量
date: 2021-01-09 22:35:22
tags: Vue
categories: 前端开发
excerpt: 如何在 Vue 项目中使用全局变量
---

## 流程

1. 在 Vue 项目中的根目录新建环境变量文件

   | 环境     | 文件名           |
   | -------- | ---------------- |
   | 本地环境 | .env.local       |
   | 开发环境 | .env.development |
   | 测试环境 | .env.devtest     |
   | 生产环境 | .env.production  |

2. 编辑文件

   ```env
   ENV = "development"

   VUE_APP_BASE_URL = "https://api.xxxx"
   ```

3. 配置启动脚本

   ```json
   // package.json
   "scripts": {
      "serve": "vue-cli-service serve",
      "local-serve":"vue-cli-service serve --mode local", // 本地环境
      "dev-build":"vue-cli-service build --mode devlopment", // 开发环境
      "dev-test-build": "vue-cli-service build --mode devlopment_test", // 测试环境
      "build": "vue-cli-service build", // 生产环境
   },
   ```

4. 在应用中使用环境变量

   ```js
   console.log(process.env.VUE_APP_BASE_URL);
   ```
