'use strict';
var greetings = require('./greetings.json');
var moment = require('moment');
module.exports = {
    getRandomGreeting: getRandomGreeting,
    getRandomGreetings: getRandomGreetings
};

function getRandomGreeting() {
    //console.log(greetings);
    var greetingIndex = Math.trunc(Math.random() * 10) % greetings.greetings.length;
    //console.log(greetingIndex);
    //console.log(greetings.greetings[greetingIndex]);
    return greetings.greetings[greetingIndex] + ". Event happened: " + moment().subtract(1, 'day').subtract(13, 'hours').fromNow();
}

function getRandomGreetings(count) {
    var results = [];
    for (var i = 0; i < count; i++) {
        results.push(getRandomGreeting());
    }
    return results;
}