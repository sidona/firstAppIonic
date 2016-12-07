/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp')
    .controller('leaguesCtrl',['eliteApi','$state',leaguesCtrl]);

  function leaguesCtrl(eliteApi,$state) {
    var vm = this;

    eliteApi.getLeagues().then(function (data) {
      vm.leagues = data
    });
    vm.selectLeague = function (id) {
      eliteApi.setLeagueId(id);
      $state.go('app.teams')
    }
  }
})();
