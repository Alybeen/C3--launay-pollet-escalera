class TournamentGenerator {
    constructor(name, type, teams) {
        this.validateTeamNames(teams);
        this.teams = teams; // Chaque équipe est un objet { name: string, players: array }
        this.name = name;
        this.type = type;
        this.poules = [];
        this.finalStages = []; // Les phases finales
    }

    validateTeamNames(teams) {
        teams.forEach(team => {
            if (typeof team.name !== 'string') {
                throw new Error('Le nom de l\'équipe doit être une chaîne de caractères');
            }
        });
    }

  generatePoules() {
      let shuffledTeams = [...this.teams].sort(() => 0.5 - Math.random());
      const nbPoules = Math.floor(shuffledTeams.length / 4);
      for (let i = 0; i < nbPoules; i++) {
          this.poules.push(shuffledTeams.splice(0, 4));
      }
      console.log("Poules générées :", this.poules);
  }


  simulatePoulesMatches() {
      let qualifiedTeams = [];
      this.poules.forEach(poule => {
          qualifiedTeams.push(...poule.slice(0, 2));
      });
      this.finalStages.push(qualifiedTeams);
      console.log("Équipes qualifiées pour les phases finales :", this.finalStages[0]);
  }


    generateFinalStages() {
        if (this.finalStages.length > 0) {
            let currentStage = this.finalStages[0];
            while (currentStage.length > 1) {
                let nextStage = [];
                for (let i = 0; i < currentStage.length; i += 2) {
                    let winner = currentStage[i + (Math.random() > 0.5 ? 0 : 1)];
                    nextStage.push(winner);
                }
                this.finalStages.push(nextStage);
                currentStage = nextStage;
            }
            console.log("Phases finales :", this.finalStages);
        } else {
            console.log("Aucune équipe qualifiée pour les phases finales.");
        }
    }

    getTotalPlayers() {
        let totalPlayers = 0;
        this.teams.forEach(team => {
            totalPlayers += team.players.length;
        });
        return totalPlayers;
    }

  generateTournament() {
      this.generatePoules();
      this.simulatePoulesMatches();
      this.generateFinalStages();
      return this.finalStages;
  }
}

export default TournamentGenerator;
