const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const response = fetch('https://kevingimbel.de/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=100');

let data = response.then((response) => {
    return response.json();
}).then(data => {
    let _posts = [];
    data.forEach(item => {
        _posts.push({
            title: item.title.rendered,
            link: item.link,
            content: item.content.rendered,
            excerpt: item.excerpt.rendered,
            slug: item.link.replace('https://kevingimbel.de/', '')
        });
    });
    return _posts;
}).catch(err => {
    console.log("Error retrieving posts: ", err);
});

module.exports = data;