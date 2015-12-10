'use strict';
angular.module('directives').directive('personalInfo', ['$log', function ($log) {


    return {
        restrict: 'E',
        replace: 'false',
        controller: ['$scope', function($scope) {
            // this -> controller
            this.logInput = function(logMessage) {
                $log.info(logMessage);
            };
        }]
    };

}]);
