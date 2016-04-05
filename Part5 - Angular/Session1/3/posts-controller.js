(function() {
    'use strict';
    
    angular.module('blerg').controller('PostsController', PostsController);
    function PostsController() {
        this.post = {
            title: 'How I Made my Own Blerg',
            body: 'It all started when I was a young developer, much less jaded than I am today...'
        };
    }
    
})();
