(function() {
    'use strict';
    
    angular.module('blerg').directive('post', post);
    
    function post() {
        return {
            templateUrl: 'post-directive.tpl.html',
            scope: {
                post: '='
            }
        };
    }
    
})();
