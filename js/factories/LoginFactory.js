angular.module('emailApp')
    .factory('LoginFactory', 
        function LoginFactory ($q, $http, $routeParams) {

            'use strict';

            function login (username) {
                if (params.id) {
                    var deferred = $q.defer();
                    $http.get('json/users' + params.id + '.json').
                        success(function (data) {
                            deferred.resolve(data);
                    }).error(function (data) {
                        alert(data);
                        deferred.reject(data);
                    });
                    return deferred.promise;
                }

            };
        }
    );