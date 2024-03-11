import { expect } from 'chai';
import TeamGenerator from "../src/teamGenerator.js";

describe('Création d\'une équipe', () => {
    it('Création Simple : Vérification des paramètres de base', () => {
        // create players
        const players = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'];

        // generate team
        const teamGenerator = new TeamGenerator(players);
        teamGenerator.generateTeams();
        const teams = teamGenerator.getTeams();

        // validate team creation
        expect(teams).to.be.an('array').that.is.not.empty;

        // check team's parameters
        const firstTeam = teams[0];
        expect(firstTeam).to.have.property('name').that.is.a('string');
        expect(firstTeam).to.have.property('players').that.is.an('array').that.is.not.empty;
    });
})
