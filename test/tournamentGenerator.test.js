import { expect } from 'chai';
import TournamentGenerator from '../src/tournamentGenerator.js';
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

describe('Génération des Poules', () => {
    it('Devrait retourner un tableau vide si moins de 4 équipes sont fournies', () => {
        const teams = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4'] },
            { name: 'Équipe 2', players: ['Joueur 5', 'Joueur 6', 'Joueur 7', 'Joueur 8'] },
        ];
        const tournamentGenerator = new TournamentGenerator('Nom du Tournoi', 'Type du Tournoi', teams);
        tournamentGenerator.generatePoules();
        expect(tournamentGenerator.poules).to.be.an('array').that.is.empty;
    });
});

describe('Génération des Phases Finales', () => {
    it('Devrait retourner un tableau vide si aucune équipe n\'est qualifiée pour la phase finale', () => {
        const teams = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4'] },
            { name: 'Équipe 2', players: ['Joueur 5', 'Joueur 6', 'Joueur 7', 'Joueur 8'] },
        ];
        const tournamentGenerator = new TournamentGenerator('Nom du Tournoi', 'Type du Tournoi', teams);
        tournamentGenerator.generatePoules();
        tournamentGenerator.simulatePoulesMatches();
        expect(tournamentGenerator.finalStages).to.deep.equal([[]]);
    });
});

describe('Calcul du nombre total de joueurs', () => {
    it('Devrait retourner le nombre total de joueurs dans le tournoi', () => {
        const teams = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4'] },
            { name: 'Équipe 2', players: ['Joueur 5', 'Joueur 6', 'Joueur 7', 'Joueur 8'] },
        ];
        const tournamentGenerator = new TournamentGenerator('Nom du Tournoi', 'Type du Tournoi', teams);
        const totalPlayers = tournamentGenerator.getTotalPlayers();
        expect(totalPlayers).is.equal(8);
    });
});

describe('Validation du type des noms d\'équipes', () => {
    it('Devrait rejeter si le nom d\'équipe n\'est pas une chaîne de caractères', () => {
        // Arrange
        const invalidTeam = { name: 123, players: ['Joueur 1'] };

        // Act & Assert
        expect(() => new TournamentGenerator('Nom du Tournoi', 'Type du Tournoi', [invalidTeam])).to.throw('Le nom de l\'équipe doit être une chaîne de caractères');
    });
});

describe('Validation du type du nom du tournoi', () => {
    it('Devrait rejeter si le nom du tournoi n\'est pas une chaîne de caractères', () => {
        const teams = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4'] },
            { name: 'Équipe 2', players: ['Joueur 5', 'Joueur 6', 'Joueur 7', 'Joueur 8'] },
        ];
        const invalidTournamentName = 123;
        expect(() => new TournamentGenerator(invalidTournamentName, 'Type du Tournoi', teams)).to.throw('Le nom du tournoi doit être une chaîne de caractères');
    });
});

describe('Validation du type de tournoi', () => {
    it('Devrait rejeter si le type du tournoi n\'est pas une chaîne de caractères', () => {
        const teams = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4'] },
            { name: 'Équipe 2', players: ['Joueur 5', 'Joueur 6', 'Joueur 7', 'Joueur 8'] },
        ];
        const invalidTournamentType = 123;
        expect(() => new TournamentGenerator('Nom du Tournoi', invalidTournamentType, teams)).to.throw('Le type du tournoi doit être une chaîne de caractères');
    });
});
