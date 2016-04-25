var schema = require("./post-schema.json");
var post = require("./example-post.json");
var Validator = require('jsonschema').Validator;
var v = new Validator();
console.log(v.validate(post, schema));