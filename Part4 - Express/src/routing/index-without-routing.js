"use strict";

var express = require("express");


var app = express();

app.route("/posts")
    .get(function (req, res) {
        res.send("Get all users!");

    })
    .post(function (req, res) {
        res.send("Create a new user ");
    });

app.put("posts/:postId", function (req, res) {
    res.send("Update user with id " + req.params.id);
});

app.route("/users")
    .get(function (req, res) {
        res.send("Get all blog posts!");

    })
    .post(function (req, res) {
        res.send("Create a new post");
    });

app.put("users/:postId", function (req, res) {
    res.send("Update post with postId");
});

app.listen(1339, function () {
    console.log("server running on port 1339");
});