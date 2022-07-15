<template>
    <div class="drawer">
        <div class="topBar">
            <div id="logo" @click="go('/')">
                <img src="../../public/icon/nut.svg" alt="logo" />
                Hazelnut's Blog
            </div>
            <div class="closeBtn">
                <img class="hamburgerBtn" src="../../public/icon/close.svg" alt="icon" @click="$emit('extend')" />
            </div>
        </div>
        <div class="menu">
            <ul>
                <li v-for="(item, index) in menuList" :key="index">
                    <a :href="item.path">{{ item.title }}</a>
                    <div :class="item.path === path ? 'underline' : 'underline hidden'"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                { title: "Home", path: "/" },
                { title: "Tag", path: "/tag" },
                { title: "Links", path: "/links" },
                { title: "Project", path: "/project" },
                { title: "About", path: "/about" }
            ],
            path: ""
        }
    },
    created() {
        this.getRoute();
    },
    methods: {
        getRoute() {
            this.path = this.$route.path.split(".")[0];
        }
    }
};
</script>

<style scoped>
.drawer {
    width: 100%;
    height: 100%;
    background-color: #2d3746;
    position: fixed;
    top: 0;
    z-index: 10;
    overflow: hidden;
}

/* 打开样式 */
.open {
    height: 100%;
    z-index: 9;
    transition: all 0.35s linear;
}

/* 关闭样式 */
.close {
    height: 0;
    transition: all 0.35s linear;
}

.topBar {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}

#logo {
    color: #eeeeee;
    font-size: 1rem;
    font-weight: bold;
    line-height: 70px;
    cursor: pointer;
    display: flex;
}

#logo img {
    width: 30px;
    margin-right: 10px;
}

.closeBtn {
    width: 30px;
    display: flex;
}

/* 菜单栏 */
.menu {
    padding: 0 1rem;
}

.menu ul {
    list-style: none;
}

.menu ul li a {
    font-size: 2rem;
    line-height: 4rem;
    color: #ffffff;
}

.menu .underline {
    width: 6rem;
    height: 0.5rem;
    position: absolute;
    margin-top: -1.6rem;
    background-color: skyblue;
    z-index: -1;
}

.hidden {
    display: none;
}
</style>
