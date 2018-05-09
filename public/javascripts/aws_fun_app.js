angular.module('aws-fun', ['ngMaterial', 'ngMessages']);




angular.module('aws-fun')


.controller('MainScreenControl', function($scope, $http) {
    var accessToken = "";
    var secretKeyA = "";
    //  console.log('AWS MainScreenControl');
    $scope.autheData = function() {
        var data = {}; //created a empty data obj

        data.accessToken = $scope.accessKey;
        data.secretKey = $scope.secretAccessKey;


        //call in a back end route to validate my key and token
        //$http.get('/someUrl', config).then(successCallback, errorCallback);
        /*
        function successCallback(){}
        function errorCallback(){}
        */
        $http.post('/auth', data, null).then(
            function(data) {
                console.log(data);
            },
            function(data) {
                console.log(data);

            }
        );

    }

})