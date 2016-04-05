'use strict';
//console.log('hello world');
var greetings = require('./greetings.json');
//console.log(greetings);
var randomGreeter = require('./random-greeter');

console.log(randomGreeter.getRandomGreeting());
console.log(randomGreeter.getRandomGreetings(2));