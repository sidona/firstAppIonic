/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
  angular.module('ionicApp')
    .factory('eliteApi',['$http','$q','$ionicLoading','$timeout','CacheFactory',eliteApi]);

  function eliteApi($http,$q,$ionicLoading,$timeout,CacheFactory) {
    var currentLeagueId;

    self.leaguesCache=CacheFactory.get("leaguesCache");
    self.leagueDataCache=CacheFactory.get("leagueDataCache");

    function getLeagues() {
      var deferred=$q.defer(),
        cacheKey="leagues",
        leaguesData=self.leaguesCache.get(cacheKey);

      if(leaguesData){
        console.log('Found data inside cache ', leaguesData);
        deferred.resolve(leaguesData)
      }else {
        $http.get('http://elite-schedule.net/api/leaguedata')
          .success(function (data) {
            self.leaguesCache.put(cacheKey,data);
            deferred.resolve(data)
          })
          .error(function () {
            deferred.reject();
            console.log('error while making HTTP call')
          });
      }
      return deferred.promise;
    }

    function getLeaguesData(forceRefresh) {
      if(typeof forceRefresh === 'undefined'){
        forceRefresh=false;
      }
      var deferred=$q.defer(),
        cacheKey="leagueData-"+currentLeagueId,
        leagueData=null;

      if(!forceRefresh){
        leagueData=self.leagueDataCache.get(cacheKey);
      }


      if (leagueData){
        console.log('found data in cache,', leagueData);
        deferred.resolve(leagueData)
      }else {

        $ionicLoading.show({template: 'Loading...'});

        $http.get('http://elite-schedule.net/api/leaguedata/' + currentLeagueId)
          .success(function (data, status) {
            self.leagueDataCache.put(cacheKey,data);
            $ionicLoading.hide();
            deferred.resolve(data);
          })
          .error(function () {
            $ionicLoading.hide();
            deferred.reject();
            console.log('error while making HTTP call')
          });
      }
      return deferred.promise;
    }

    function setLeagueId(leagueId) {
      currentLeagueId=leagueId;
    }

    return{
      getLeagues:getLeagues,
      getLeaguesData:getLeaguesData,
      setLeagueId:setLeagueId
    }

  }
})();
