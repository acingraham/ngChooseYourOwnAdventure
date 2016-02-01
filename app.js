angular.module('App', [
    'ngRoute'
])
.controller('AppCtrl', function($scope, playerInfo) {
    $scope.playerInfo = playerInfo;
})
.filter('gameHeading', function() {
    return function(name) {
        return name ? name + "'s Adventure" : 'Choose Your Own Adventure';
    };
})
.controller('StartPageCtrl', function($location, $scope, $window, playerInfo) {
    $scope.data = {
        message: 'Please enter your name, adventurer!',
        playerName: '',
        nameSelected: false
    };

    $scope.selectName = function() {
        $scope.data.nameSelected = true;
        $scope.data.message = 'Welcome ' + $scope.data.playerName + '!';
        playerInfo.name = $scope.data.playerName;
    };

    $scope.startAdventure = function() {
        $location.path('/leaving-home');
    };
})
.controller('LeavingHomeCtrl', function($scope, $location, playerInfo) {
    $scope.crushName = '';

    // NOTE - Could turn getting the crushes into a service
    $scope.crushes = [
        {
            name: 'Jill',
            img: 'http://si.wsj.net/public/resources/images/BN-BY925_mag041_OZ_20140318165119.jpg',
            gender: 'F'
        },
        {
            name: 'Jane',
            img: 'http://img.myconfinedspace.com/wp-content/uploads/2010/04/nerdy-girl-looking-over-a-book.jpg',
            gender: 'F'
        },
        {
            name: 'Joanne',
            img: 'http://weneedfun.com/wp-content/uploads/2015/05/Funny-Girls-13.jpg',
            gender: 'F'
        },
        {
            name: 'Jack',
            img: 'https://auliarosadi.files.wordpress.com/2011/11/tumblr_luojak3j3o1r4pvz5o1_500.jpg',
            gender: 'M'
        },
        {
            name: 'James',
            img: 'http://thumbs.dreamstime.com/z/serious-faced-handsome-nerd-young-guy-isolated-white-33859825.jpg',
            gender: 'M'
        },
        {
            name: 'Jeff',
            img: 'http://imgfave-herokuapp-com.global.ssl.fastly.net/image_cache/1324685227603163.jpg',
            gender: 'M'
        }
    ];

    $scope.pickCrush = function(name) {
        playerInfo.crush = name;
        $location.path('/river');
    };

    $scope.hoverName = function(name) {
        $scope.crushName = name;
    };
})
.controller('RiverCtrl', function($scope, $location, $window) {
    $scope.submitAnswer = function(answer) {
        if (answer.toLowerCase() === 'fire') {
            $window.alert("Correct!  You get the troll's gold!  The troll is bankrupt and reconsiders his riddle & gold business model and the life choices that led him to this point.");
            $location.path('/cave');
        } else {
            $window.alert("Not even close.  The troll eats you for your ignorance and prays your stupidity isn't contagious.");
            $location.path('/end');
        }
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
})
.factory('playerInfo', function() {
    return {
        crush: '',
        money: 100,
        name: ''
    };
});
