angular.module('App', [
    'ngRoute'
])
.controller('StartPageCtrl', function($location, $scope, $window) {
    $scope.playerName = '';

    $scope.startAdventure = function() {
        if (!$scope.playerName) {
            $window.alert('Every adventurer must have a name!');
        } else {
            $location.path('/leaving-home');
        }
    };
})
.controller('LeavingHomeCtrl', function($scope, $location) {
    $scope.continue = function() {
        $location.path('/river');
    };
})
.controller('RiverCtrl', function($scope, $location) {
    $scope.continue = function() {
        $location.path('/cave');
    };
})
.controller('CaveCtrl', function($scope, $location) {
    $scope.continue = function() {
        $location.path('/end');
    };
})
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'start.tpl.html'
        })
        .when('/leaving-home', {
            templateUrl: 'leaving-home.tpl.html'
        })
        .when('/river', {
            templateUrl: 'river.tpl.html'
        })
        .when('/cave', {
            templateUrl: 'cave.tpl.html'
        })
        .when('/end', {
            templateUrl: 'end.tpl.html'
        })
        .otherwise({
            templateUrl: '404.tpl.html'
        });
});
