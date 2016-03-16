var MyTeeTimeApp = angular.module('MyTeeTimeApp', ['ng-Route']);


MyTeeTimeApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'index.html',
  })

  .when('/index', {
    templateUrl : 'index.html',
  })

  .when('/new', {
    templateUrl : 'indexNewAppointment.html',
  })

  .when('/edit', {
    templateUrl : 'indexEditAppointment.html',
  })

  .when('/stats', {
    templateUrl : 'indexAppointmentStats.html',
  })

});
