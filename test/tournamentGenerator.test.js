import { expect } from 'chai';
import TournamentGenerator from '../src/TournamentGenerator.js';
import TeamGenerator from "../src/teamGenerator.js";

describe('Création de Tournoi', () => {
        it('Création Simple : Vérification des paramètres de base', () => {
            // Générer les équipes
            const teamGenerator = new TeamGenerator(['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10', 'Player 11', 'Player 12']);
            teamGenerator.generateTeams();
            const teams = teamGenerator.getTeams();

            // Générer le tournoi
            const tournamentName = 'Football';
            const tournamentType = 'knockout';
            const tournament = new TournamentGenerator(tournamentName, tournamentType, teams);
            const finalStages = tournament.generateTournament();

            // Vérifier les paramètres de base du tournoi
            expect(tournament.name).to.equal(tournamentName);
            expect(tournament.type).to.equal(tournamentType);
            expect(tournament.teams).to.deep.equal(teams);
            expect(finalStages).to.be.an('array').that.is.not.empty;
        });
});
