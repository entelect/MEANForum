(function() {
    'use strict';
    
    angular.module('blerg').directive('datepicker', datepicker);
    
    function datepicker() {
        return {
            templateUrl: 'datepicker-directive.tpl.html',
            scope: {},
            require: 'ngModel',
            link: function($scope, $element, $attrs, ngModelController) {
                $scope.vm = {};
                
                initDate();
                
                $scope.$watch('vm.year', dateUpdated);
                $scope.$watch('vm.month', dateUpdated);
                $scope.$watch(function() {
                    console.log('Digest is checking day');
                    return $scope.vm.day;
                }, dateUpdated);

                function initDate() {
                    var today = new Date();
                    $scope.vm.year = today.getFullYear();
                    $scope.vm.month = today.getMonth();
                    $scope.vm.day = today.getDate();
                }
                
                function dateUpdated() {
                    var newDate = null;
                    if (angular.isNumber($scope.vm.year) && angular.isNumber($scope.vm.month) && angular.isNumber($scope.vm.day)) {
                        newDate = new Date($scope.vm.year, $scope.vm.month, $scope.vm.day);
                    }
                    ngModelController.$setViewValue(newDate);
                }
            }
        };
    }
    
})();
