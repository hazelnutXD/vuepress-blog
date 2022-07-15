---
title: Node 使用 multer 实现文件上传
date: 2021-10-18 19:23:57
tags: 后端
categories: Node
excerpt: multer 用来处理 multipart/form-data 类型的表单数据，主要用于上传文件
---

## 简介

Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。

## 安装

```bash
npm install multer
```

## 使用

1. 导入模块

   ```js
   const multer = require("multer");
   ```

2. 配置储存引擎

   如果想要改变上传文件的文件名，则需要配置存储引擎

   ```js
   const storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, "./uploads");
     },
     filename: function (req, file, cb) {
       const now = Date.now();
       cb(null, now + "-" + file.originalname);
     },
   });

   const upload = multer({ storage: storage });
   ```

3. 配置路由

   ```js
   // 上传单个文件，single 里的参数由前端的 input 按钮的 name 属性来决定
   router.post("/upload/file", upload.single("file"), (req, res) => {
     res.status(200).json({
       success: true,
       message: "文件上传成功",
     });
   });

   // 如果需要上传多个文件，则需要将 single 改为 array
   upload.array("file");
   ```

4. 保存至数据库

   从官方文档里可知，Multer 会添加一个 body 对象以及 file 或 files 对象到 express 的 request 对象中。 body 对象包含表单的文本域信息，file 或 files 对象包含对象表单上传的文件信息。所以如果想把图片链接保存至数据库，只需要把 req.file 或 req.files 传递给控制器就可以了。
