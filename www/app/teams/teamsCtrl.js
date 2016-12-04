/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp')
    .controller('teamsCtrl',['eliteApi',teamsCtrl])

  function teamsCtrl(eliteApi) {
    var vm=this;

    eliteApi.getLeaguesData().success(function (data) {
      console.log(data)
      vm.teams=data.teams;
    })

  }
})();
