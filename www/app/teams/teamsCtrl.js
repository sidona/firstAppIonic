/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp')
    .controller('teamsCtrl',['$scope','eliteApi',teamsCtrl]);

  function teamsCtrl($scope,eliteApi) {
    var vm=this;

    vm.loadList=function () {
    eliteApi.getLeaguesData().then(function (data) {
      vm.teams=data.teams;
    }).finally(function () {
      $scope.$broadcast('scroll.refreshComplete')
    })
    };
    vm.loadList(false);
  }
})();
