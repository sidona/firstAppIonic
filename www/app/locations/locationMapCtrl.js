/**
 * Created by sdonose on 12/7/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp')
    .controller('LocationMapCtrl',['$stateParams','eliteApi',LocationMapCtrl]);

  function LocationMapCtrl($stateParams,eliteApi) {
    var vm=this;

    vm.locationId=Number($stateParams.id);

      vm.map={
        center:{
          latitude:38.897677,
          longitude:-77.0365530
        },
        zoom:12
      };


      eliteApi.getLeaguesData().then(function (data) {
        vm.location=_.find(data.locations,{id:vm.locationId});
        vm.marker={
          coords:{
            latitude:vm.location.latitude,
            longitude:vm.location.longitude
          },
          title:vm.location.name+"<br/>(Tap for directions)",
          showWindow:true
        };
        vm.map.center.latitude=vm.location.latitude;
        vm.map.center.longitude=vm.location.longitude;
      })
  }
})();
