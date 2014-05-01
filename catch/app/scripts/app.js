'use strict';

angular
  .module('catchApp', [
    'ngRoute',
      'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.tpl',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.tpl',
        controller: 'MyAuthCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.tpl',
        controller: 'UserCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.tpl',
        controller: 'HomeCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.tpl',
        controller: 'HomeCtrl'
      })
      .when('/available', {
        templateUrl: 'views/availTrans.tpl',
        controller: 'HomeCtrl'
      })
       .when('/rides', {
        templateUrl: 'views/yourRides.tpl',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });