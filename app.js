// 1) module -> creating angular js module
var app = angular.module("gameApp",[]);

// 2) controller
app.controller("Gamecontroller",function($scope){
    // scope works as bridge between JS and html
    // this creates <h2>{{message}}</h2> in html
    $scope.message = "hie lol";
});
