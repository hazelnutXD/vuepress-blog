<template>
  <div class="articleList">
    <ul>
      <li v-for="(item, index) in articleList" :key="index" @click="go(item.path)">
        <em></em>
        <p>{{ item.path }}</p>
        <p class="date">06/24/2022</p>
      </li>
    </ul>
  </div>
</template>

<script>
import articleList from "../../public/json/articleList.json";
export default {
  data() {
    return {
      articleList: articleList.data,
    };
  },
  methods: {
    go(path) {
      path = "/article/" + encodeURI(path);
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.articleList {
  /* min-height: 100%; */
}

.articleList ul {
  list-style: none;
  overflow: hidden;
}

.articleList ul li {
  position: relative;
  padding-left: 30px;
  padding-bottom: 20px;
  border-left: 1px #ffffff solid;
  cursor: pointer;
}

.articleList ul li:nth-last-child(1) {
  border: none;
}

.articleList ul li em {
  position: absolute;
  left: -4px;
  top: 0;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #ffffff;
}

.articleList ul li p {
  margin: 0;
  font-size: 18px;
}

.articleList .date {
  font-size: 12px;
}
</style>
