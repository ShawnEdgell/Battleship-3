import Player from "../src/logic/player";
import Gameboard from "../src/logic/gameboard";

describe("Player factory function", () => {

    describe("can attack the enemy gameboard", () => {
        let player;
        let enemyGameboard;

        beforeEach(() => {
            player = Player("Human");
            enemyGameboard = Gameboard();
        });

        it("records a hit when a ship is present", () => {
            enemyGameboard.placeShip(1, [0, 0], 'horizontal'); // Ensuring a ship is placed at 0,0
            player.attack(enemyGameboard, 0, 0);
            const attackedCell = enemyGameboard.getBoard()[0][0];
            expect(attackedCell.isHit(0)).toBe(true);
        });

        it("records a miss when no ship is present", () => {
            player.attack(enemyGameboard, 0, 0); // No ship at 0,0
            expect(enemyGameboard.getMissedAttacks()).toContainEqual([0, 0]);
        });
    });

    it("AI can make a random legal play", () => {
        const player = Player("Computer");
        const enemyGameboard = Gameboard();
        player.autoAttack(enemyGameboard);
        const boardHasHit = enemyGameboard.getBoard().some(row => row.some(cell => cell && cell.isHit()));
        expect(boardHasHit || enemyGameboard.getMissedAttacks().length > 0).toBe(true);
    });

    it("AI does not repeat attacks", () => {
        const player = Player("Computer");
        const enemyGameboard = Gameboard();
        const allAttacks = [];

        for (let i = 0; i < 100; i++) {
            const attackCoord = player.autoAttack(enemyGameboard);
            allAttacks.push(attackCoord);
        }

        const uniqueAttacks = new Set(allAttacks.map(coord => coord.join(',')));
        expect(uniqueAttacks.size).toBe(allAttacks.length);
    });

});
