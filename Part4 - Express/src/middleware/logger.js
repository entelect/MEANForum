module.exports = function (req, res, next) {
    console.log("%s %s - %s ", new Date().toISOString(), req.method, req.originalUrl);
    next();
};