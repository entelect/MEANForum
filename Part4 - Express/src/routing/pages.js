"use strict";


var router = require("express").Router();


router.get("/hello/:name?", function (req, res) {
    res.render("hello.hbs", req.params);
});


router.get("/posts", function (req, res) {

    var posts = require("../pages/posts.json");

    res.render("posts.hbs", {posts: posts});
});


module.exports = router;