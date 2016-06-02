var express = require('express');
var app = express();

app.get('/', function (req, res) {

    res.send("Hello World!");
});

app.post('/', function (req, res) {
    res.send("got a post request");
});

app.put('/', function (req, res) {
    res.send("got a put request");
});

app.listen(1330, function () {
    console.log('Server running on port 1330');
});

