"use strict";

module.exports = function (err, req, res, next) {
    console.log("handling");
    if (err.status === 404) {
        return res.status(404).json({message: err.message});
    }
    next(err);
};


