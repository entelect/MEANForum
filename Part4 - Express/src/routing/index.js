var express = require("express");
var posts = require("./posts");
var users = require("./users");
var logger = require("../middleware/logger");
var errorHandler = require("../middleware/error-handler");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var handler404 = require("../middleware/404-handler");

var app = express();

app.use(cors()); //enables cors for all domains and for all requests
app.use(morgan('combined'));
app.use(logger);
app.use(bodyParser.json());
app.get("/", function (req, res) {
    console.log(res.status());
    res.send("Welcome to my blog!");
});

app.use("/posts", posts);
app.use("/users", users);
app.use("/users", users);
app.use(handler404);
app.use(errorHandler);


app.listen(1339, function () {
    console.log('Server running on port 1339');
});