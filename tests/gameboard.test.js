import Gameboard from "../src/logic/gameboard";

describe("Gameboard factory function", () => {

    it("can receive an attack and record a hit", () => {
        const gameboard = Gameboard();
        gameboard.placeShip(1, [0, 0], 'horizontal');
        gameboard.receiveAttack(0, 0);
        expect(gameboard.getBoard()[0][0].isHit(0)).toBe(true); // Updated isHit check with the position
    });

    it("can receive an attack and record a miss", () => {
        const gameboard = Gameboard();
        gameboard.receiveAttack(0, 0);
        expect(gameboard.getMissedAttacks()).toContainEqual([0, 0]);
    });

    it("can determine if all ships have been sunk", () => {
        const gameboard = Gameboard();

        // Fill the entire board with 1-length ships
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                gameboard.placeShip(1, [i, j], 'horizontal');
            }
        }

        // Attack every possible location
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                gameboard.receiveAttack(i, j);
            }
        }

        expect(gameboard.allShipsSunk()).toBe(true);
    });
});
