"use strict";

var handlebars = require("handlebars");
var fs = require("fs");
var postTemplate = fs.readFileSync("./post.hbs", "utf-8");
var compiled = handlebars.compile(postTemplate);

var post = require("../json schema/example-post.json");
var rendered = compiled(post);

fs.writeFileSync('./renderedPost.html', rendered);

