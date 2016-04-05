(function() {
    'use strict';

    angular.module('blerg').controller('NewPostController', NewPostController);
    function NewPostController(postsApi) {
        var self = this;
        
        self.post = {};
        self.savePost = function() {
            if (!self.newPostForm.$valid) {
                return;
            }
            postsApi.createPost(self.post);
            self.post = {};
        };
    }
})();
