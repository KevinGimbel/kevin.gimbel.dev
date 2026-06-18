import { inspect } from "util";

import { readFile } from "fs/promises";
const eleventyPackage = JSON.parse(
  await readFile("node_modules/@awesome.me/buildawesome/package.json", "utf8"),
);

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
    });

    return posts;
  });

  eleventyConfig.addShortcode("builder_meta", function (field, fallback = "") {
    if (eleventyPackage[field]) {
      return eleventyPackage[field];
    }
    return fallback;
  });

  eleventyConfig.addFilter(
    "debug",
    (content) => `<pre>${inspect(content)}</pre>`,
  );

  eleventyConfig.addPairedShortcode(
    "note",
    (content) => `<div class="note">${inspect(content)}</div>`,
  );

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
}
