var express = require("express");
app = express();

app.get('/', function (req, res) {
    res.send('Got a GET request');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/', function (req, res) {
    res.send('Got a Put request');
});

app.patch('/', function (req, res) {
    res.send('Got a Patch request');
});


app.head('/', function (req, res) {
    res.send('Got a Patch request');
});

app.listen(1330, function () {
    console.log('Server running on port 1330');
});