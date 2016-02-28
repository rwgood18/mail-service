angular.module('emailApp')
    .controller('InboxCtrl', 
        function InboxCtrl () {
        this.title = 'My Inbox';

/*        InboxFactory.getMessages()
            .success(function(jsonData, statusCode) {
                console.log('The request was successful!', statusCode, jsonData);
                // Add email messages to controller's scope
                $scope.emails = jsonData;

            });*/
});