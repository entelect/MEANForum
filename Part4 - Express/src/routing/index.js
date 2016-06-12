var express = require("express");
var posts = require("./posts");
var users = require("./users");
var pages = require("./pages");
var logger = require("../middleware/logger");
var errorHandler = require("../middleware/error-handler");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var handler404 = require("../middleware/404-handler");
var hbs = require("hbs");


var app = express();
app.set('view-engine', 'hbs');
app.set('views', '../pages');
hbs.registerPartials('../pages/partials');


app.use(cors()); //enables cors for all domains and for all requests
app.use(morgan('combined'));
app.use(logger);
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.send("Welcome to my blog!");
});

app.use("/posts", posts);
app.use("/users", users);
app.use("/pages", pages);


app.use(handler404);
app.use(errorHandler);


app.listen(1339, function () {
    console.log('Server running on port 1339');
});