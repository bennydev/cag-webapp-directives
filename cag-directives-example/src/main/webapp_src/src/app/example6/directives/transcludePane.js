"use strict";
angular.module('directives').directive('transcludePane', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        template: '<div style="border: 1px solid black">' +
            '<ng-transclude></ng-transclude>' +
            '</div>'
    };
});