<template>
  <div class="container">
    <div class="topBarWrap">
      <top-bar @extend="extend"></top-bar>
    </div>
    <div class="banner">
      <div class="bannerCap">
        <p>Links</p>
      </div>
    </div>
    <div class="linksWrap">
      <div class="list">
        <dl v-for="(item, index) in bookmark" :key="index">
          <dt>{{ item.type }}</dt>
          <dd v-for="(item, index) in item.list" :key="index">
            <a :href="item.path" target="__blank">{{ item.title }}</a>
          </dd>
        </dl>
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
import bookmark from "../../public/json/bookmark.json";
export default {
  components: { TopBar, Drawer },
  data() {
    return {
      bookmark: bookmark.data,
      isExtend: false,
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
  background-color: #2d3746;
  display: flex;
  flex-direction: column;
}

.topBarWrap {
  width: 100%;
  height: 70px;
  position: fixed;
}

.banner {
  width: 100%;
  height: 240px;
  background-image: url("../../public/images/bookmark_banner.jpg");
  background-position: center;
  background-size: cover;
}

.bannerCap {
  width: 100%;
  height: 100%;
  background-color: rgba(64, 118, 190, 0.6);
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

.list {
  width: 800px;
  margin: 50px auto 100px;
}

.list dl dt {
  font-size: 28px;
  margin-bottom: 20px;
  color: #ffffff;
}

.list dl dd {
  font-size: 18px;
  line-height: 40px;
}

.list a {
  color: #ffffff;
}

@media screen and (max-width: 800px) {
  .list {
    width: 100vw;
    padding: 0 2rem;
    box-sizing: border-box;
  }
}
</style>
