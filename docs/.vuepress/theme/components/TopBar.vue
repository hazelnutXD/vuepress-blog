<template>
  <div :class="pageScroll ? 'changeTopBar topBar' : 'topBar'">
    <div id="logo" @click="go('/')">
      <img src="../../public/icon/nut.svg" alt="logo" />
      Hazelnut's Blog
    </div>
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menuList" :key="index" @click="go(item.path)">
          <img :src="item.iconPath" alt="icon">
          <span>{{ item.title }}</span>
        </li>
      </ul>
      <img class="hamburgerBtn" src="../../public/icon/hamburger-button.svg" alt="icon" @click="$emit('extend')" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { title: "Home", iconPath: "/icon/home.svg", path: "/" },
        { title: "Tag", iconPath: "/icon/tag.svg", path: "/tag" },
        { title: "Links", iconPath: "/icon/link.svg", path: "/links" },
        { title: "Project", iconPath: "/icon/project.svg", path: "project" },
        { title: "About", iconPath: "/icon/user.svg", path: "about" },
      ],
      pageScroll: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      this.pageScroll = scrollTop >= 10 ? true : false;
    }
  },
};
</script>

<style scoped>
.topBar {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  padding: 0 60px;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.changeTopBar {
  background-color: #2d3746;
  color: #2d3746;
}

#logo {
  color: #eeeeee;
  font-size: 20px;
  font-weight: bold;
  line-height: 70px;
  cursor: pointer;
  display: flex;
}

#logo img {
  width: 30px;
  margin-right: 10px;
}

.topBar .menu {
  width: 460px;
}

.menu ul {
  width: 100%;
  height: 100%;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.menu ul li {
  height: 100%;
  cursor: pointer;
  line-height: 70px;
  color: #eeeeee;
  display: flex;
}

.menu ul li img {
  width: 20px;
}

.menu ul li span {
  margin-left: 10px;
}

.menu .hamburgerBtn {
  display: none;
}

/* 响应式 */
@media screen and (max-width: 480px) {
  #logo {
    font-size: 1rem;
  }

  .topBar {
    padding: 0 1rem;
  }

  .topBar .menu {
    width: 30px;
    display: flex;
  }

  .topBar .menu ul {
    display: none;
  }

  .menu .hamburgerBtn {
    display: block;
  }
}
</style>
