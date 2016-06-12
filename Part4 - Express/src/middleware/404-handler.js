"use strict";

module.exports = function (req, res) {
    console.log("handling");
    return res.status(404).json({message: "page not found"});

};


