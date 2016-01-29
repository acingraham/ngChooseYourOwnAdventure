angular.module('App', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<div>Every story has a beginning...</div>'
        })
        .when('/end', {
            template: '<div>...and an end</div>'
        })
        .otherwise({
            template: '<div>...and those adventurous few who stray off the beaten path...</div>'
        })
});


/*
.controller('StartPageCtrl', function($scope) {
    $scope.playerName = '';
    $scope.message = 'Please enter your name, adventurer!';

    $scope.setPlayerName = function() {

    };
});

    <div ng-controller="StartPageCtrl">
        <h1>Choose your own adventure</h1>

        <h2 ng-model="message"></h2>

        <input ng-model="playerName" placeholder="Your name"> <button ng-click="setPlayerName">Submit</button>
    </div>
*/