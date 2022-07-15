---
title: Node 使用 JWT 验证用户权限
date: 2021-07-20 01:28:28
tags: 后端
categories: Node
excerpt: JWT 是用来替代传统 session 认证的解决方案，应用于多种验证鉴权场景
---

## JWT 简介

JWT 全名 JSON Web Token 是一个开放标准，它定义了一种紧凑的、自包含的方式，用于作为 JSON 对象在各方之间安全地传输信息。该信息可以被验证和信任，因为它是数字签名的。

[JWT 加密解密工具](https://jwt.io/)

## Token 鉴权机制的步骤

1. 用户使用用户名密码来请求服务器
2. 服务器进行验证用户的信息
3. 服务器通过验证发送给用户一个 token
4. 客户端存储 token，并在每次请求时附送上这个 token 值
5. 服务端验证 token 值，并返回数据

## JWT 的构成

### encoded

由三段信息构成，用 '.' 来隔开

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### header

解码后的头部，由加密的算法和类型组成

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### payload

载荷，用于存放有效信息

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

### SIGNATURE

签证信息

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
) secret base64 encoded
```

## 使用

1. 安装

   ```bash
   npm install jsonwebtoken
   ```

2. 在数据库模型文件中引入

   ```js
   const jwt = require("jsonwebtoken");
   ```

3. 加密内容、密钥、过期时间

   ```js
   jwt.sign({ uid: this._id }, process.env.JWT_KEY, {
     expiresIn: process.env.JWT_EXPIRES,
   });
   ```

4. 向客户端发送携带 JWT 的 cookie

5. 用户鉴权时进行解密

   ```js
   jwt.verify(token, process.env.JWT_KEY);
   ```
