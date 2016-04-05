"use strict";

var express = require("express");
var router = express.Router();


router.use("/", function (req, res, next) {
    console.log("%s - Logging on the posts page", new Date());
    next();
});


router.get("/", function (req, res) {
    res.send("Get all blog posts! - from router");

});
router.post("/", function (req, res) {

    console.log(JSON.stringify(req.body, null, 4));
    res.status(201).json({postYouTriedToCreate: req.body});
    //res.send("Create a new post - from router!");


    //Use this as the post data
    //{
    //    "user":"sello",
    //    "title":"a post",
    //    "content":"Its very interesting"
    //}

});

router.get("/lots-of-pre-processing", function (req, res, next) {

        req.responseMessage = "First middleware here - ";
        next();
    }, function (req, res, next) {
        req.responseMessage += "Second middleware here";
        next();
    },
    function (req, res) {
        res.send("3rd middleware returning the result - " + req.responseMessage);
    });

router.get("/return-error", function (req, res, next) {

    //try to do something that fails!

    next({message: "Stop asking for errors!!", status: 400});
});

router.get("/:postId", function (req, res, next) {
    if (req.params.postId == 100) {
        return next({status: 404, message: "No post with Id " + req.params.postId});
    }
    res.send("get post with id " + req.params.postId);
});


module.exports = router;

