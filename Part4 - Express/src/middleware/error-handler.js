"use strict";


module.exports = function (err, req, res, next) {
    console.log("Some logging in our error handler");
    res.status(err.status || 500).send(err.message);
};
