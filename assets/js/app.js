var App = angular.module('App', ['ng-Route']);


App.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'home.html'
  })

  .when('/index', {
    templateUrl : 'home.html'
  })

  .when('/new', {
    templateUrl : 'indexNewAppointment.html'
  })

  .when('/edit', {
    templateUrl : 'indexEditAppointment.html'
  })

  .when('/stats', {
    templateUrl : 'indexAppointmentStats.html'
  });

});
