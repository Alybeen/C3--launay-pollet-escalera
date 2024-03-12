import { expect } from 'chai';
import TeamGenerator from "../src/teamGenerator.js";
//library to spy console
import sinon from 'sinon';

describe('Création d\'une équipe', () => {
    let players;
    const consoleLogSpy = sinon.spy(console, 'log');

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

    //test tdd -> test if each team can have an equal numbers of players
    it('vérifie que le nombre de joueurs suffit à créer des équipes avec un nombre de joueurs équivalent', () => {

        players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6', 'Player7'];
        const expectedErrorMessage = "le nombre de joueurs rentrés n'est pas bon";

        const generator = new TeamGenerator(players);
        generator.generateTeams()

        const teams = generator.getTeams();

        expect(teams).to.be.an('array');
        expect(teams).to.be.an('array').that.is.empty;
        expect(consoleLogSpy.calledWith(expectedErrorMessage)).to.be.true;

        // restore console.log to its initial state
        consoleLogSpy.restore();
    });

    it('vérifie le type de valeur entrée pour le nombre de joueurs par équipe', () => {
        players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];
        expect(() => new TeamGenerator(players, "chaussette")).to.throw("Le paramètre entré n'est pas valide");
    });

})
