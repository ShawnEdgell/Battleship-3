import Ship from './shipFactory';

function Gameboard() {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    const missedAttacks = [];

    function getBoard() {
        return board;
    }

    function getMissedAttacks() {
        return missedAttacks;
    }

    function placeShip(length, [x, y]) {
        for (let i = 0; i < length; i++) {
            board[x][y + i] = Ship(1);  // Create a new 1-length ship for each part
        }
    }
    

    function receiveAttack(x, y) {
        const target = board[x][y];
        if (target) {
            target.hit(0); // Update this line
        } else {
            missedAttacks.push([x, y]);
        }
    }
    

    function allShipsSunk() {
        const unsunkShips = board.flat().filter(ship => ship && !ship.isSunk());
    
        console.log("Unsunk ships:", unsunkShips.length, unsunkShips); // Debugging line
    
        return unsunkShips.length === 0;
    }
    

    return { getBoard, getMissedAttacks, placeShip, receiveAttack, allShipsSunk };
}

export default Gameboard;
