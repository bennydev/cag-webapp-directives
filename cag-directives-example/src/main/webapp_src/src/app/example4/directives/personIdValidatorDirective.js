"use strict";
angular.module('directives').directive('personIdValidTwo', ['$log', function ($log) {
    $log.log("in personIdValid");
    return {
        // Isolated scope
        scope: {
            // two-way binding to person-id-attr - means we can change the value...
            personId: '='
        },
        // As attribute only
        restrict: 'A',
        link: function (scope, elem, attrs) {
            // Bind the 'blur' event
            elem.bind('blur', function () {
                // Triggered by blur
                if (scope.personId) {
                    if (scope.personId.length > 12 || scope.personId.length < 12) {
                        scope.personId = 'WTF, dude????';
                        $log.log('personId is not valid');
                    } else {
                        $log.log('personId is valid');
                    }
                } else {
                    $log.log('personId empty');
                }
            });

            $log.log('done binding');
        }
    };
}]);