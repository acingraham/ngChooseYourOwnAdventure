angular.module('App', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'start.tpl.html'
        })
        .when('/end', {
            templateUrl: 'end.tpl.html'
        })
        .otherwise({
            templateUrl: '404.tpl.html'
        })
});
