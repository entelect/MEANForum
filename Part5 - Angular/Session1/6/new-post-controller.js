(function() {
    'use strict';

    angular.module('blerg').controller('NewPostController', NewPostController);
    function NewPostController(postsApi) {
        var self = this;
        
        self.post = {};
        self.savePost = function() {
            postsApi.createPost(self.post);
            self.post = {};
        };
    }
})();
