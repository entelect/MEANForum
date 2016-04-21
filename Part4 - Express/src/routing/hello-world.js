var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send({"message": "Hello World!"});
});

app.post('/', function (req, res) {
    res.send({"message": "Hello World!"});
});

app.get('/afile', function (req, res) {
    res.sendfile('./package.json');
});


app.listen(1330, function () {
    console.log('Server running on port 1330');
});

