import { expect } from 'chai';
import TournamentGenerator from '../src/TournamentGenerator.js';

describe('Création de Tournoi', () => {
    it('Création Simple', () => {
        const teams = [
            { name: 'Team A', players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'] },
            { name: 'Team B', players: ['Player 5', 'Player 6', 'Player 7', 'Player 8'] },
            { name: 'Team C', players: ['Player 9', 'Player 10', 'Player 11', 'Player 12'] }
        ];
        const tournament = new TournamentGenerator(teams);
        tournament.generatePoules()
        tournament.simulatePoulesMatches()
        const finalStages = tournament.generateTournament();

        expect(finalStages).to.be.an('array').that.is.not.empty;
    });
});
