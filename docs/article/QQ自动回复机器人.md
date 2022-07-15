---
title: QQ 自动回复机器人
date: 2021-06-20 15:15:04
tags: QQ机器人
categories: Node
excerpt: 基于 Node 实现 QQ 自动回复功能
---

## 简介

QQ 机器人协议库

[官方文档](https://github.com/takayama-lily/oicq)

## 安装

```bash
npm install oicq
```

## 使用

```js
const { createClient } = require("oicq");
const account = 123456789;
const client = createClient(account);

client.on("system.online", () => console.log("Logged in!"));

// 监听消息
client.on("message", (e) => {
  console.log(e);
  e.reply("hello world", true); //true表示引用对方的消息
});

//监听群消息并回复
client.on("message.group", (data) => {
  client.sendGroupMsg(data.group_id, "message");
});

client
  .on("system.login.qrcode", function (e) {
    //扫码后按回车登录
    process.stdin.once("data", () => {
      this.login();
    });
  })
  .login();
```
