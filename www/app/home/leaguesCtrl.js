/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp')
    .controller('leaguesCtrl',['eliteApi',leaguesCtrl]);

  function leaguesCtrl(eliteApi) {
    var vm=this;

    var leagues=eliteApi.getLeagues();
    var leagueData=eliteApi.getLeaguesData();

    console.log(leagueData)
  };
})();
