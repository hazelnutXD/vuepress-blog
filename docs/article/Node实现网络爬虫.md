---
title: Node 实现网络爬虫
date: 2021-11-30 10:30:19
tags: 网络爬虫
categories: Node
excerpt: cheerio 是基于 Node 的一款爬虫库
---

## 简介

cheerio 用来解析 web 页面的 dom 元素

[官方文档](https://github.com/cheeriojs/cheerio)

## 安装

```bash
npm install cheerio
```

## 使用

1. 导入模块

   ```js
   const cheerio = require("cheerio");
   ```

2. 获取页面 dom 元素

   ```js
   // 使用 axios 请求，申请一个变量保存返回的结果
   let dom = res.data;
   ```

3. 使用 cheerio 解析返回的结果

   ```js
   let $ = cheerio.load(dom);
   ```

## 示例

像 jQuery 一样操作 DOM 元素

- 获取某个标签内的文字

  ```js
  let text = $(".class_name").text();
  ```

- 获取页面所有图片标签的 src

  ```js
  let imgs = [];
  $("img").each((index, item) => {
    imgs.push($(item).attr("src"));
  });

  // 储存图片
  imgs.map((url) =>
    download(url).pipe(fs.createWriteStream(`dist/${Date.now()}.jpg`))
  );
  ```
