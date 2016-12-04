/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
  angular.module('ionicApp')
    .factory('eliteApi',['$http',eliteApi])

  function eliteApi($http) {
    var leagues=JSON.parse('[{"id":1005,"name":"5th Grade Saturday 2015"}]');
    var leagueData=$http({
      url:'http://elite-schedule.net/api/leaguedata/2039',
    method:'GET'
    });
    //var leagueData=$resource('http://elite-schedule.net/api/leaguedata/2039')
    function getLeagues() {
      return leagues;
    }
    function getLeaguesData() {
      return leagueData;
    }
    console.log(getLeaguesData())
    return{
      getLeagues:getLeagues,
      getLeaguesData:getLeaguesData
    }

  }
})();
