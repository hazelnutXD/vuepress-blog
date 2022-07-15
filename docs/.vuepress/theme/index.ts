import type { Theme } from "@vuepress/core";
import { defaultTheme } from "@vuepress/theme-default";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: "vuepress-theme-hazel",
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, "layouts/Layout.vue"),
      404: path.resolve(__dirname, "layouts/404.vue"),
      Home: path.resolve(__dirname, "layouts/Home.vue"),
      Tag: path.resolve(__dirname, "layouts/Tag.vue"),
      Links: path.resolve(__dirname, "layouts/Links.vue"),
      Project: path.resolve(__dirname, "layouts/Project.vue"),
      About: path.resolve(__dirname, "layouts/About.vue"),
    },
  };
};
