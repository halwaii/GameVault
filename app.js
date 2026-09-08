// 1) module -> creating angular js module
var app = angular.module("gameApp",[]);



// 2) controller
app.controller("Gamecontroller",function($scope){
    // scope works as bridge between JS and html
    // this creates <h2>{{message}}</h2> in html
    //$scope.message = "Welcome to GameVault";

    // array of games and each game is object
    // with name, genre, status, rating
    $scope.games=[
        // {
        //     name: "withcher 3",
        //     genre: "RPG",
        //     status: "playing",
        //     rating: 10
        // },
        // {
        //     name: "Sifu",
        //     genre: "martial arts combat",
        //     status: "completed",
        //     rating: 9
        // },
        // {
        //     name: "GTA 6",
        //     genre: "action-adventure",
        //     status: "wishlist",
        //     rating: 10
        // }
    ];

    // function to add game
    $scope.addGame = function(){
    $scope.games.push({
        name: $scope.newGame.name,
        genre: $scope.newGame.genre,
        status: $scope.newGame.status,
        rating: $scope.newGame.rating
    });
    $scope.newGame = {};

    // function to delete game of that index
    $scope.deleteGame = function(index) {
        // remove 1 element from given index
    $scope.games.splice(index, 1);
};
}
});
