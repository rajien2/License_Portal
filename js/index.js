(function () {
  'use strict';


  var MyApp = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'firebase'])
    .component('pageOne', {
      templateUrl: 'page1.html',
      controller: NavController,
    })
    .component('pageTwo', {
      templateUrl: 'page2.html',
      controller: NavController,
    })
    .component('pageThree', {
      templateUrl: 'page3.html',
      controller: NavController,
    })
    .controller('NavController', NavController)
    .controller("SampleCtrl", function ($scope, $firebaseObject) {

      var ref = firebase.database().ref().child("data");

      // download the data into a local object
      var syncObject = $firebaseObject(ref);

      // synchronize the object with a three-way data binding
      // click on `index.html` above to see it used in the DOM!
      syncObject.$bindTo($scope, "data");
    })

    .config(function ($mdThemingProvider) {

      // Configure a dark theme with primary foreground yellow

      $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();

    });

  function NavController($scope) {
    $scope.currentNavItem = 'page1';
  }

})();


