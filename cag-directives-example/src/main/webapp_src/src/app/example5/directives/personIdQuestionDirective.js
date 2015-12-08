'use strict';
angular.module('directives').directive('personIdFour', [function () {

    console.log("In personIdTwo's factory method");

    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'example5/directives/personId.tpl.html'
    };

}]);
