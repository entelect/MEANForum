(function() {
    'use strict';

    angular.module('blerg').factory('postsApi', postsApi);
    function postsApi() {
        var posts = [{
            title: 'How I Made my Own Blerg',
            body: 'It all started when I was a young developer, much less jaded than I am today...'
        }, {
            title: 'How I Made my Own Blerg Part 2',
            body: 'Have you ever considered that to non-programmers, strings and threads are more or less the same thing?'
        }];
        
        return {
            getPosts: getPosts,
            createPost: createPost
        };
        
        function getPosts() {
            return posts;
        }
        function createPost(post) {
            posts.push(post);
        }
    }
})();
