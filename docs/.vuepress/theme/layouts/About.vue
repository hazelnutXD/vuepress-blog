<template>
  <div class="container">
    <div class="topBarWrap">
      <top-bar @extend="extend"></top-bar>
    </div>
    <div class="banner">
      <div class="bannerCap">
        <div class="content">
          <h1>Hazelnut</h1>
          <p>
            欢迎来到我的个人博客网站，希望我的日志记录能够帮助到你 (๑•̀ㅂ•́)و✧
          </p>
          <h3>技术栈</h3>
          <ul>
            <li v-for="(item, index) in skill" :key="index">{{ item }}</li>
          </ul>
          <h3>其他站点</h3>
          <ul>
            <li v-for="(item, index) in links" :key="index">
              <a :href="item.path" target="__blank"> {{ item.title }} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <Drawer @extend="extend" :class="isExtend ? 'drawer open' : 'drawer close'"></Drawer>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import Drawer from "../components/Drawer.vue";
export default {
  components: { TopBar, Drawer },
  data() {
    return {
      isExtend: false,
      skill: ["PHP", "JavaScript/TypeScript", "Node.js", "Vue"],
      links: [
        {
          title: "GitHub主页",
          path: "https://github.com/hazelnutXD",
        },
        {
          title: "Hexo 博客",
          path: "https://violatricolor.gitee.io/blog/",
        },
      ],
    };
  },
  methods: {
    extend() {
      this.isExtend = !this.isExtend;
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.banner {
  width: 100%;
  height: 100vh;
  background-image: url(../../public/images/about.webp);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bannerCap {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bannerCap h1 {
  font-size: 40px;
  text-align: center;
}

.bannerCap h3 {
  font-size: 22px;
}

.bannerCap p {
  font-size: 16px;
  text-align: center;
}

.banner ul li a {
  color: #ffffff;
}

@media screen and (max-width: 480px) {
  .bannerCap {
    padding: 0 2rem;
  }
}
</style>
