<template>
  <div class="container">
    <div class="topBarWrap">
      <top-bar @extend="extend"></top-bar>
    </div>
    <div class="article">
      <Content />
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
    }
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
  min-height: 100%;
  background-color: #2d3746;
  overflow: hidden;
}

.topBarWrap {
  width: 100%;
  height: 70px;
}

.article {
  width: 1200px;
  margin: 60px auto 120px;
  box-sizing: border-box;
}

@media screen and (max-width: 1200px) {
  .article {
    width: 100vw;
    padding: 0 1.2rem;
    box-sizing: border-box;
  }
}
</style>
