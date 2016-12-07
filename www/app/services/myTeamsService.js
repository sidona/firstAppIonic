/**
 * Created by sdonose on 12/7/2016.
 */
(function () {
  'use strict';

  angular.module('ionicApp').factory('myTeamsService', ['DSCacheFactory', myTeamsService]);

  function myTeamsService(DSCacheFactory) {
    var self = this;

    self.myTeamsCache = DSCacheFactory.get("myTeamsCache");


    function followTeam(team){
      self.myTeamsCache.put(team.id, team);
    }

    function unfollowTeam(teamId){
      self.myTeamsCache.remove(teamId.toString());
    }

    function getFollowedTeams(){
      var teams = [],
        keys = self.myTeamsCache.keys();

      for (var i = 0; i < keys.length; i++) {
        var team = self.myTeamsCache.get(keys[i]);
        teams.push(team);
      };

      return teams;
    }

    function isFollowingTeam(teamId){
      return self.myTeamsCache.get(teamId);
    }

    return {
      followTeam: followTeam,
      unfollowTeam: unfollowTeam,
      getFollowedTeams: getFollowedTeams,
      isFollowingTeam: isFollowingTeam
    };
  }
})();
