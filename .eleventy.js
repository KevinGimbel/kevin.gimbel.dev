const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {
  // Copy `assets/css` to `_site/assets/css`
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/font");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/.ht*");

  eleventyConfig.addCollection("sections", function (collectionApi) {
    // get unsorted items
    const posts = collectionApi.getAll().filter((input) => {
      if (input.inputPath.match("/_section/")) {
        return input;
      }
    });

    posts.sort((a, b) => {
      return a.data.position - b.data.position;
    })

    return posts;
  });

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }
}
