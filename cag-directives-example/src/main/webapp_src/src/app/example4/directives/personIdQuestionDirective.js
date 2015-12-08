'use strict';
angular.module('directives').directive('personIdThree', [function () {

    console.log("In personIdTwo's factory method");

    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'example4/directives/personId.tpl.html'
    };

}]);
