const mongoose = require('mongoose');

async function connectToAtlas() {
    try {
        await mongoose.connect('mongodb+srv://laidOffWorkerLearnsToCode:mwwYNTiOQ6LYiqsZ@cluster0.kazmrmr.mongodb.net/blog?retryWrites=true&w=majority');
        console.log('connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

connectToAtlas();

const Post = require('./post');

const newPost = new Post({
    title: 'My first post',
    body: 'This is my first post',
    category: 'Technology',
    likes: 0,
    tags: ['tech', 'newbie'],
    date: Date.now(),
});

// newPost.save((error, post) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//         console.log('Post saved successfully');
//     }
// });

async function savePost() {
    try {
        const post = await newPost.save();
        console.log(post);
        console.log('Post saved successfully');
    } catch (error) {
        console.log(error);
    }
}

// savePost();

async function getPosts() {
    try {
        const posts = await Post.find({likes: {$gt: 3}});
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}

// getPosts();

async function updatePost(id) {
    try {
        const post = await Post.findById('645a015c8f38b2989ce3bbfd');
        post.likes += 2;
        const updatedPost = await post.save();
        console.log(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

// updatePost();

async function deletePost(id) {
    try {
        const deletePost = await Post.deleteOne({_id: id});
        console.log(deletePost);
    } catch (error) {
        console.log(error);
    }
}

deletePost('645a03b619a010c72b96410b')