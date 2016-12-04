/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp')
    .controller('standingsCtrl',['eliteApi',standingsCtrl])

  function standingsCtrl(eliteApi) {
    var vm=this;

    eliteApi.getLeaguesData().success(function (data) {
      vm.standings=data.standings;
    })
  }
})();
