/**
 * Created by Sidona on 12/2/2016.
 */
(function () {
'use strict';

angular.module('ionicApp')
  .controller('teamDetailCtrl',['$stateParams','eliteApi',teamDetailCtrl]);

  function teamDetailCtrl($stateParams,eliteApi) {

  //console.log('state params',$stateParams)
    var vm=this;


    vm.teamId=Number($stateParams.id);

   eliteApi.getLeaguesData().success(function (data) {
     var team=_.chain(data.teams)
      .flatten('divisionTeams')
       .find(data.teams.divisionTeams,{"id":vm.teamId})
       .value();
     console.log(team)
     vm.teamName=team.divisionTeams.name;
     console.log(vm.teamName)

     vm.games=_.chain(data.games)
       .filter(isTeamInGame)
       .map(function (item) {
         var isTeam1=(item.team1Id === vm.teamId);
         var opponentName=isTeam1 ? item.team2 :item.team1;
         var scoreDisplay=getScoreDisplay(isTeam1,item.team1Score,item.team2Score)
         return{
           gameId:item.id,
           opponent:opponentName,
           time:item.time,
           location:item.location,
           locationUrl:item.locationUrl,
           scoreDisplay:scoreDisplay,
           homeAway:(isTeam1 ? "vs":"at")
         }
       })
       .value();

     function isTeamInGame(item) {
       return item.team1Id == vm.teamId || item.team2Id===vm.teamId;
     }
     function getScoreDisplay(isTeam1,team1Score,team2Score) {
      if(team1Score && team2Score){
        var teamScore=(isTeam1 ? team1Score :team2Score);
        var opponentScore=(isTeam1 ? team1Score :team2Score);
        var winIndicator=teamScore > opponentScore ? "W" :"L";
        return winIndicator+teamScore+"-"+opponentScore;
      }
      else {
        return "";
      }

     }
    });


  }
})();
