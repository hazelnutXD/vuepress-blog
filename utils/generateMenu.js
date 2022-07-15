const fs = require("fs");

fs.readdir("./docs/article", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    const articleList = files.filter(
      (item) => item.indexOf(".md") > -1 && item !== "index.md"
    );
    articleList.sort((a, b) => {
      return a - b;
    });
    let json = { data: [] };
    articleList.forEach((item) => {
      json.data.push({ path: item });
    });
    console.log(json);
    fs.writeFile(
      "./docs/.vuepress/public/json/articleList.json",
      JSON.stringify(json),
      { encoding: "utf8" },
      (err) => {
        console.log(err);
      }
    );
  }
});
