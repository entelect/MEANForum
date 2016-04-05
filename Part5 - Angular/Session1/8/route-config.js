(function() {
    'use strict';

    angular.module('blerg').config(routeConfig);
    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('view-posts', {
            url: '/',
            templateUrl: 'view-posts.tpl.html',
            controller: 'PostsController as vm'
        });
        $stateProvider.state('new-post', {
            url: '/new',
            templateUrl: 'new-post.tpl.html',
            controller: 'NewPostController as vm'
        });
    }
})();
