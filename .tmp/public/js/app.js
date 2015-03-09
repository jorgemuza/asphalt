'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/models', {templateUrl: 'partials/models.html', controller: 'MyCtrl1'});
  $routeProvider.when('/clients', {templateUrl: 'partials/clients.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/models'});
}]);