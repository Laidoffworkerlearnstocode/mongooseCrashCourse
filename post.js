const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    category: String,
    likes: Number,
    tags: [String],
    date: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema, "myCollection");

module.exports = Post;
