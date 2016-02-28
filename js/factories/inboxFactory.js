angular.module('emailApp').factory('InboxFactory', function InboxFactory ($http) {
        var exports = {};

        exports.getMessages = function () {
            return $http.get('json/emails.json')
                .error(function (data) {
                    console.log('There was an error!', data);
                });
        };
        return exports;
    });