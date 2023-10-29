import Ship from "../src/logic/ship";

describe("Ship factory function", () => {

    // This test ensures that when a ship is hit, it records the hit at the appropriate position.
    it("can be hit", () => {
        const ship = Ship(3);
        ship.hit(1);
        expect(ship.isHit(1)).toBe(true); // Using the isHit method instead of accessing hits directly
    });

    // This test checks if a ship correctly determines it's sunk when all its parts are hit.
    it("can determine if it is sunk", () => {
        const ship = Ship(3);
        ship.hit(0);
        ship.hit(1);
        ship.hit(2);
        expect(ship.isSunk()).toBe(true);
    });

    // This test ensures that a ship isn't marked as sunk unless all of its parts are hit.
    it("is not sunk if not all parts are hit", () => {
        const ship = Ship(3);
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk()).toBe(false);
    });

});
