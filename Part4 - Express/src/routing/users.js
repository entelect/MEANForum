"use strict";

var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.send("Get all users! - from router");

});
router.post("/", function (req, res) {
    res.send("Create a new user  - from router! ");
});

router.get("/:userId", function (req, res, next) {

    if (req.params.userId == 1) {
        return next({status: 404, message: "No user with id " + req.params.userId})
    }

    res.send("get user with id " + req.params.userId);
});

module.exports = router;