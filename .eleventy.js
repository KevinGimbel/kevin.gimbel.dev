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
    return collectionApi.getAll().sort((a, b) => {
      return parseInt(a.data.position) - parseInt(b.data.position)
    });
  });

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  eleventyConfig.addLayoutAlias('single', 'layouts/single.njk');
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('redirect', 'layouts/redirect.njk');
}
