import { expect } from 'chai';
import TeamGenerator from "../src/teamGenerator.js";

describe('Création d\'une équipe', () => {
    let players;

    it('Création Simple : Vérification des paramètres de base', () => {
        players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];
        // create players


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

    //test tdd -> test if each team has an equal numbers of players
    it('check if each team has equal numbers of players ', () => {

        players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6', 'Player7'];

        const generator = new TeamGenerator(players, 3);
        generator.generateTeams();

        const teams = generator.getTeams();

        expect(teams).to.be.an('array');
        expect(teams).to.have.lengthOf(Math.ceil(players.length / 3));

        teams.forEach(team => {
            expect(team.players).to.be.an('array');
            expect(team.players).to.have.lengthOf(3);
        });
    });
})
