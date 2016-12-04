/**
 * Created by Sidona on 12/4/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp')
    .controller('gameCtrl',['$stateParams','eliteApi',gameCtrl])

    function gameCtrl($stateParams,eliteApi) {
      var vm=this;

      var gameId=Number($stateParams.id);
      eliteApi.getLeaguesData().success(function (data) {
        vm.game=_.find(data.games,{'id':gameId})
        console.log(vm.game)
      })

    }

})();
