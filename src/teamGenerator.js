class TeamGenerator {
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }
  isPlayersCountDivisible(nb_players, playersPerTeam) {

    if(nb_players % playersPerTeam === 0) {
      return true;
    }
    return false;
  }

  generateTeams() {
    let shuffledPlayers = [...this.players].sort(() => 0.5 - Math.random()); // Mélange aléatoire des joueurs
    let teamIndex = 0;
    if(this.isPlayersCountDivisible(shuffledPlayers.length, this.playersPerTeam)) {
      while (shuffledPlayers.length > 0) {
        let teamPlayers = shuffledPlayers.splice(0, this.playersPerTeam);
        let teamName = `Équipe ${teamIndex + 1}`;
        let team = {
          name: teamName,
          players: teamPlayers,
        };
        this.teams.push(team);
        teamIndex++;
      }
    } else {
      console.log("le nombre de joueurs rentrés n'est pas bon")
    }
  }

  getTeams() {
    return this.teams;
  }
}

export default  TeamGenerator
// Exemple d'utilisation

