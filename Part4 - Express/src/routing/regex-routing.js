var express = require("express");
app = express();

app.get('/special*', function (req, res, next) {
    next('You asked for the special path ' + req.path.replace("/", ""));
});

app.get('/[0-9]', function (req, res, next) {
    next('You asked for the numbers path ' + req.path.replace("/", ""));
});


app.listen(1339, function () {
    console.log('Server running on port 1339');
});