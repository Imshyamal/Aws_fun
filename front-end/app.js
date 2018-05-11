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
            templateUrl: "/views/delete.ejs",

        })
        .state({
            name: "create-bucket",
            url: "/create-bucket",
            templateUrl: "/views/create-bucket.ejs",

        })
        .state({
            name: "auth",
            url: "/auth",
            templateUrl: "/views/auth.ejs",

        })

})