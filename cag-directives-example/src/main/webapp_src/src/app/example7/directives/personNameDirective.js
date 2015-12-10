"use strict";
angular.module('directives').directive('personName', function () {

    return {
        scope: true,
        restrict: 'E',
        replace: 'true',
        templateUrl: 'example7/directives/personName.tpl.html'
    };

});