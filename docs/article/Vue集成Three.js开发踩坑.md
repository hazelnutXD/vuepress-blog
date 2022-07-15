---
title: Vue 集成 Three.js 开发踩坑
date: 2021-12-28 23:38:47
tags: 动画库
categories: 前端开发
excerpt: 记录 Vue 封装 Three.js 踩过的坑
---

## 简介

three.js 是 JavaScript 编写的 WebGL 第三方库

[官方文档](http://www.webgl3d.cn/threejs/docs/)

## 安装

和其他库一样，three.js 也是通过 npm 模块化安装来引入

```bash
npm install three
```

## 使用

1. 导入模块

   在 Vue 组件中必须用以下方式来导入模块，用传统的导入方式会报错

   ```js
   import * as THREE from "three";
   ```

2. 代码引入

   新版 three.js 提供了 jsm 文件，可直接引入，但需要用解构赋值的形式

   ```js
   // 控制器
   import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
   // GLTF 模型加载
   import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
   ```

## 其他技巧

- 自定义画布背景

  简单粗暴的方法就是将 canvas 设为透明，背景调为想要的颜色

  ```js
  this.renderer = new THREE.WebGLRenderer({
    alpha: true, // canvas是否包含alpha (透明度) 默认为 false
  });
  ```

- 颜色偏差

  linear 渲染和 sRGB 渲染存在色差，sRGB 更接近人眼的感光

  ```js
  this.renderer.outputEncoding = THREE.sRGBEncoding;
  ```

## 代码示例

```js
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      loader: null,
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      // 场景
      this.scene = new THREE.Scene();
      // scene.background = new THREE.Color(0xffffff);

      // 相机
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.set(100, 0, 0);

      // 渲染器
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true, // canvas是否包含alpha (透明度) 默认为 false
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.outputEncoding = THREE.sRGBEncoding; // 将 linear 转化为 sRGB 解决 three.js 模型颜色偏差问题
      document
        .getElementById("modelPanel")
        .appendChild(this.renderer.domElement);

      // 控制
      let controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.addEventListener("change", this.renderer);

      // 环境光
      let ambientLight = new THREE.AmbientLight(0x404040, 5);
      this.scene.add(ambientLight);

      // 平行光;
      let directionalLight = new THREE.DirectionalLight(
        0xffffff,
        0.8 * Math.PI
      );
      directionalLight.position.set(0.5, 0, 0.866);
      this.scene.add(directionalLight);

      // 加载模型;
      this.loader = new GLTFLoader();
      this.loader.load(
        "url",
        (gltf) => {
          console.log(gltf);
          this.scene.add(gltf.scene);
          this.animate();
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    },
    animate() {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
  },
};
```
