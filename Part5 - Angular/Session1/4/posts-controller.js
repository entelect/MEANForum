(function() {
    'use strict';
    
    angular.module('blerg').controller('PostsController', PostsController);
    function PostsController() {
        this.posts = [{
            title: 'How I Made my Own Blerg',
            body: 'It all started when I was a young developer, much less jaded than I am today...'
        }, {
            title: 'How I Made my Own Blerg Part 2',
            body: 'Have you ever considered that to non-programmers, strings and threads are more or less the same thing?'
        }];
    }
    
})();
