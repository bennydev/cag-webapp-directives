'use strict';
angular.module('directives').directive('personIdFour', [function () {


    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'example6/directives/personId.tpl.html'
    };

}]);
