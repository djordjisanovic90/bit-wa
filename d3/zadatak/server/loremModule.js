const loremIpsum = require('lorem-ipsum');

const createTitle = () => {
    return loremIpsum({
        count: 3,
        units: 'words'
    })
};

const createBlogText = () => {
    return loremIpsum({
        count: 2,
        units: 'sentences'
    })
};

class BlogPost {
    constructor() {
        this.title = createTitle(),
            this.text = createBlogText()
    }
}

const createBlogPosts = (num) => {
    const blogArr = [];

    for (let i = 0; i < num; i++) {
        blogArr.push(new BlogPost());
    }

    return JSON.stringify(blogArr);
}

module.exports = createBlogPosts;