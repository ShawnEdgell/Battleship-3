const domController = (() => {
    // Get references to important DOM elements
    const playerBoardDiv = document.getElementById("player-board");
    const enemyBoardDiv = document.getElementById("enemy-board");
    const messageDiv = document.getElementById("message");

    function renderBoard(gameboard, boardDiv) {
        // Clear the current board for re-rendering
        boardDiv.innerHTML = '';

        // Loop through the gameboard and create visual representation
        for (let i = 0; i < gameboard.getBoard().length; i++) {
            for (let j = 0; j < gameboard.getBoard()[i].length; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                
                // Check if a ship is placed at the coordinates
                if (gameboard.getBoard()[i][j] && gameboard.getBoard()[i][j].ship) {
                    cell.classList.add("ship");
                    // If the ship at this cell is hit, mark it
                    if (gameboard.getBoard()[i][j].hits[j]) {
                        cell.classList.add("hit");
                    }
                }

                // Check if this cell has a missed attack
                if (gameboard.getMissedAttacks().some(coord => coord[0] === i && coord[1] === j)) {
                    cell.classList.add("missed");
                }

                boardDiv.appendChild(cell);
            }
        }
    }

    function displayMessage(message) {
        messageDiv.textContent = message;
    }

    function attachAttackEventListener(gameboard, callback) {
        enemyBoardDiv.addEventListener("click", (e) => {
            if (e.target.classList.contains("cell")) {
                const x = Math.floor(e.clientX / cellSize); // Calculate x-coordinate based on click position and cell size
                const y = Math.floor(e.clientY / cellSize); // Calculate y-coordinate
                callback(gameboard, x, y); // callback should be the attack function from Player
            }
        });
    }

    return {
        renderBoard,
        displayMessage,
        attachAttackEventListener
    };
})();

export default domController;
