define([
        'app',
        'controllers/main'
    ],
    function(app) {
        app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
        angular.bootstrap(document, ['angDepControlsApp']);
    });