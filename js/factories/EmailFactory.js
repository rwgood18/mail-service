angular.module('EmailApp')
    .factory('EmailFactory', 
        function EmailFactory ($q, $http, $routeParams) {

            'use strict';
            
            var exports = {};

            exports.reply = function (message) {
                if (message) {
                    alert('Message Content: ' + message);
                }
            };

            exports.getMessage = function (params) {
                console.log('getMessage called on message # ' + params.id);
                if (params.id) {
                    var deferred = $q.defer();
                    $http.get('json/message/' + params.id + '.json').
                        success(function (data) {
                            deferred.resolve(data);
                    }).error(function (data) {
                        deferred.reject(data);
                    });
                    return deferred.promise;
                }

            };
        return exports;
    });