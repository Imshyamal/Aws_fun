angular.module('aws-fun')


.controller('MainScreenControl', function($scope, $mdToast, $http) {
    var accessToken = "";
    var secretKeyA = "";
    //  console.log('AWS MainScreenControl');
    $scope.autheData = function() {


        var data = {}; //created a empty data obj

        data.accessToken = $scope.accessKey;
        data.secretKey = $scope.secretAccessKey;

        console.log("AWSController" + data.accessToken);
        console.log("AWSController" + data.secretKey);


        //call in a back end route to validate my key and token
        //$http.get('/someUrl', config).then(successCallback, errorCallback);
        /*
        function successCallback(){}
        function errorCallback(){}
        */
        $http.post('/auth', data, null).then(
            function(data) {
                console.log(data);

                console.log("Success block");
                showToast("you are Authenticated");
            },
            function(data) {
                console.log(data);
                console.log("error block");
                showToast("your token error");


            }
        );

    }


    function showToast(msg) {


        $mdToast.show(
            $mdToast.simple()
            .textContent(msg)
            .position('top Right')
            .hideDelay(3000)
        );
    }


    //get bucket list button

    $scope.getBucketList = function() {
        var data = {};
        data.accessToken = $scope.accessKey;
        data.secretKey = $scope.secretAccessKey;

        $http.post('/auth', data, null).then(
            function(data) {
                console.log(data);
                $scope.bucketss = data.data.Buckets;
                console.log("bucket Array" + $scope.bucketss);
                console.log("Success block");

            },
            function(data) {
                console.log(data);
                console.log("error block");



            }
        );


    }


})