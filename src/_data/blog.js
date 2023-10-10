const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const response = fetch('https://kevingimbel.de/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=100');

let data = response.then((response) => {
    console.log(response.headers);
    return response.json();
}).then(data => {
    let _posts = [];
    data.forEach(item => {
        var post = {
            title: item.title.rendered,
            link: item.link,
            content: item.content.rendered,
            excerpt: item.excerpt.rendered,
            slug: item.link.replace('https://kevingimbel.de/', '')
        }
        _posts.push(post);

    });

    return _posts;
}).catch(err => {
    console.log("Error retrieving posts: ", err);
});

module.exports = data;