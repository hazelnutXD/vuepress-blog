<template>
  <div class="container">
    <div class="topBarWrap">
      <top-bar @extend="extend"></top-bar>
    </div>
    <div class="banner">
      <div class="bannerCap">
        <p>Tag</p>
      </div>
    </div>
    <div class="articleListWrap">
      <article-list></article-list>
    </div>

    <div>
      <Drawer @extend="extend" :class="isExtend ? 'drawer open' : 'drawer close'"></Drawer>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import Drawer from "../components/Drawer.vue";
import ArticleList from "../components/ArticleList.vue";
export default {
  components: { TopBar, Drawer, ArticleList },
  data() {
    return {
      isExtend: false,
    }
  },
  methods: {
    extend() {
      this.isExtend = !this.isExtend;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #2d3746;
  display: flex;
  flex-direction: column;
}

.topBarWrap {
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 9;
}

.banner {
  width: 100%;
  height: 240px;
  background-image: url("../../public/images/list_banner.jpg");
  background-position: center;
  background-size: cover;
}

.bannerCap {
  width: 100%;
  height: 100%;
  background: rgba(211, 136, 37, 0.6);
}

.bannerCap p {
  font-size: 80px;
  font-weight: bold;
  letter-spacing: 4px;
  line-height: 240px;
  color: #ffffff;
  margin: 0;
  text-align: center;
}

.articleListWrap {
  width: 800px;
  margin: 0 auto;
  padding: 50px 0;
  box-sizing: border-box;
  flex: 1;
  color: #ffffff;
}

@media screen and (max-width: 800px) {
  .articleListWrap {
    width: 100vw;
  }
}
</style>
