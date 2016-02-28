angular.module('emailApp').controller('InboxCtrl', function ($scope) {
        $scope.title = 'This is a title';
        $scope.firstName = 'Ron';
        $scope.lastName = 'Jeremy';

/*        InboxFactory.getMessages()
            .success(function(jsonData, statusCode) {
                console.log('The request was successful!', statusCode, jsonData);
                // Add email messages to controller's scope
                $scope.emails = jsonData;

            });*/
});