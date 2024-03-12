class TeamGenerator {
  validatePlayersPerTeam(playersPerTeam) {
    if(Number.isInteger(playersPerTeam)) {
      return true
    } else {
      return false
    }
  }
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.teams = [];
    if (!this.validatePlayersPerTeam(playersPerTeam)) {
      throw new Error("Le paramètre entré n'est pas valide");
    }
    this.playersPerTeam = playersPerTeam;
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

