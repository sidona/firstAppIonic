/**
 * Created by sdonose on 12/6/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp').controller('LocationsCtrl', ['eliteApi', LocationsCtrl]);

  function LocationsCtrl(eliteApi) {
    var vm = this;

    eliteApi.getLeaguesData().then(function(data){
      vm.locations = data.locations;
    });
  }
})();
