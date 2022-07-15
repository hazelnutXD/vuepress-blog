<template>
  <div class="container">
    <div class="contentWrap">
      <div class="topBarWrap">
        <top-bar @extend="extend"></top-bar>
      </div>
      <div class="section">
        <div class="sectionBox">
          <dl>
            <dt>
              <img src="../../public/images/avatar.png" alt="logo" />
            </dt>
            <dd>用喝杯咖啡的时间，来读篇文章吧</dd>
            <dd>A blog theme for VuePress</dd>
          </dl>
          <input type="button" value="Begin" @click="go('/tag')" />
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
    }
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    extend() {
      this.isExtend = !this.isExtend;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-image: url(../../public/images/index.jpg);
  background-position: center;
  background-size: cover;
}

.contentWrap {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

.topBarWrap {
  width: 100%;
  height: 70px;
}

.section {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sectionBox {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section dl {
  color: #ffffff;
}

.section dt {
  display: flex;
}

.section dl dt img {
  width: 120px;
  margin: 0 auto 35px;
  border-radius: 50%;
}

.section dl dd {
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 32px;
  letter-spacing: 2px;
}

.section dl dd:nth-of-type(2) {
  font-size: 20px;
  margin-top: 20px;
}

.section input[type="button"] {
  width: 120px;
  height: 40px;
  margin-top: 40px;
  letter-spacing: 2px;
  font-weight: bold;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.section input[type="button"]:hover {
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid #fff;
}

/* 响应式 */
@media screen and (max-width: 480px) {
  .section dl dd {
    font-size: 1.2rem;
  }

  .section dl dd:nth-of-type(2) {
    font-size: 1rem;
    margin-top: 20px;
  }
}
</style>
