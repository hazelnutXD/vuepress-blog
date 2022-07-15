import { defineUserConfig } from "vuepress";
import { localTheme } from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Blog",
  description: "这是我的第一个 VuePress 站点",
  theme: localTheme({}),
});
