import { inspect } from "util";

// Workaround for https://github.com/11ty/eleventy/issues/3128
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const eleventyPackage = require("@11ty/eleventy/package.json");

export default async function (eleventyConfig) {
  // Copy `assets/css` to `_site/assets/css`
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/font");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/.ht*");
  eleventyConfig.addPassthroughCopy("src/CNAME");

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

  eleventyConfig.addShortcode("11ty_meta", function (field) {
    if (eleventyPackage[field]) {
      return eleventyPackage[field]
    }
    return "";
  })

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  eleventyConfig.addPairedShortcode("note", (content) => `<div class="note">${inspect(content)}</div>`);

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }
}
