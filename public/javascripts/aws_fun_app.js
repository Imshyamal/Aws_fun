var appJ = angular.module('aws-fun', ['ngMaterial', 'ngMessages', 'ui.router']);

appJ.config(function($stateProvider) {
    $stateProvider
        .state({
            name: "list-bucket",
            url: "/list-bucket",
            templateUrl: "/views/bucket-list.ejs", //template - html 1.

        })
        .state({
            name: "delete-bucket",
            url: "/delete-bucket",
            templateUrl: "views/delete.ejs",

        })
})


angular.module('aws-fun')


.controller('MainScreenControl', function($scope, $mdToast, $http, $mdDialog, $state) {
    var accessToken = "";
    var secretKeyA = "";
    //  console.log('AWS MainScreenControl');

    $scope.gotoState = function(state) {
        if (state === 'list-bucket') {

            $state.go(state);
            return;
        }

        $state.go(state);

    };


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

    //==========================Bucket List==========================================//
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
        //==============goToBucket() for getting specific bucket in list==================//
    $scope.goToBucket = function(bucketn, event) {
        console.log("Got selected bucket from list" + bucketn);
        $mdDialog.show(
            $mdDialog.alert()
            .title('Navigating')
            .textContent('Bucket ' + bucketn)
            .ariaLabel('Person inspect demo')
            .ok('Okay')
            .targetEvent(event)
        );
    }




    //=================================Delete Bucket===============================//
    $scope.deleteBucket = function(bucketn) {
        $mdDialog.show(
            $mdDialog.alert()
            .title('Delete Bucket')
            .textContent('Are you sure you want to delete ' + bucketn + 'Bucket')
            .ariaLabel('Secondary click demo')
            .ok('Delete')
            .targetEvent(event)
        );

        console.log("Delete action Controller");
    };


    //===============End======================//

})