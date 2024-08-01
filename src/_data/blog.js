const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
// 5 = Coding
// 14 = TIL
// 33 = DevOps
// 83 = RE
const response = fetch(
  "https://kevingimbel.de/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=100&categories=5,14,33,83",
);

let data = response
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let _posts = [];
    data.forEach((item) => {
      var post = {
        title: item.title.rendered,
        link: item.link,
        content: item.content.rendered,
        excerpt: item.excerpt.rendered,
        slug: item.link.replace("https://kevingimbel.de/", ""),
      };
      _posts.push(post);
    });

    return _posts;
  })
  .catch((err) => {
    console.log("Error retrieving posts: ", err);
  });

export default data;
