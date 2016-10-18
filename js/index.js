(function () {
  'use strict';


  var MyApp = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'firebase'])
    .controller('AppCtrl', AppCtrl)
    .component('pageOne', {
      templateUrl: 'page1.html',
      controller: AppCtrl,
    })
    .component('pageTwo', {
      templateUrl: 'page2.html',
      controller: AppCtrl,
    })
    .component('pageThree', {
      templateUrl: 'page3.html',
      controller: AppCtrl,
    })
    .controller("SampleCtrl", function ($scope, $firebaseObject) {

      var ref = firebase.database().ref().child("data");

      // download the data into a local object
      var syncObject = $firebaseObject(ref);

      // synchronize the object with a three-way data binding
      // click on `index.html` above to see it used in the DOM!
      syncObject.$bindTo($scope, "data");
    })

  function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  }

})();


