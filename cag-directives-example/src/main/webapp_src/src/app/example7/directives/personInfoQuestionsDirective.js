'use strict';
angular.module('directives').directive('personalInfo', [ function () {


    return {
        scope: {
            personInfo: '@'
        },
        restrict: 'E',
        replace: 'true',
        templateUrl: 'example7/directives/personInfo.tpl.html',
        link: function(scope, elem, attrs) {
            //     scope.personInfo = {
            //    personId: '',
            //        personFirstName: '',
            //        personLasName: ''
            //}
        }
    };

}]);
