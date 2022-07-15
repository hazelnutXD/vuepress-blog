---
title: NPM 包管理器
date: 2020-12-01 20:00:19
tags: 后端
categories: Node
excerpt: Node 的包管理器配置方法
---

## 修改国内镜像

- 配置源地址

  ```bash
  npm config set registry http://registry.npm.taobao.org/
  ```

- 查看源地址受否正确的被更改

  ```bash
  npm config get registry
  ```

- 取消镜像

  ```bash
  npm config delete registry
  ```

## 使用

1. 初始化

   ```bash
   npm init -y
   ```

2. 安装依赖

   ```bash
   npm install
   ```

3. 如果出现系统禁止运行脚本，执行以下命令，没有出现则忽略

   ```bash
   set-ExecutionPolicy RemoteSigned
   ```

## 插件安装

全局安装 -g

项目依赖 --save

开发依赖 --sava-dev
