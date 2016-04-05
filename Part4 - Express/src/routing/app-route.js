var express = require("express");
app = express();


app.route('/posts').get(function getPosts(req, res) {
    res.send("Returns all posts");
}).post(function createNewPost(req, res) {
    res.send("Create a new post");
}).head(function (req, res) {
    res.send("Test the waters");
});


app.listen(1339, function () {
    console.log('Server running on port 1339');
});