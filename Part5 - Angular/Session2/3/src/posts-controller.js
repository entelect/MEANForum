(function() {
    'use strict';
    
    angular.module('blerg').controller('PostsController', PostsController);
    function PostsController(postsApi) {
        this.posts = postsApi.getPosts();
    }
    
})();
