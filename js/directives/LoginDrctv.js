angular.module('emailApp')
    .directive( 'login', function LoginDrctv () {
        'use strict';

        return {

            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "js/directives/login.tmpl.html",
            controllerAs: 'login',
            controller: function (LoginFactory) {

                function login (username) {
                    LoginFactory.login(username);
                };

            },
            link: function (scope, element, attrs, ctrl) {
                var textArea = element.find('.email_response-text')[0];
                scope.$watch('reply', function (newVal, oldVal) {
                    if (newVal === oldVal) return;
                    if (newVal) {
                        $timeout(function () {
                            textArea.focus();
                        }, 0);
                    }
                })
            }
        }

        });