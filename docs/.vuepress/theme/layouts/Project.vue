<template>
  <div class="container">
    <div class="topBarWrap">
      <top-bar @extend="extend"></top-bar>
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
    };
  },
  methods: {
    extend() {
      this.isExtend = !this.isExtend;
    }
  },
};
</script>

<style>
</style>
