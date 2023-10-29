function Player() {
    function attack(gameboard, x, y) {
        gameboard.receiveAttack(x, y);
    }

    function autoAttack(gameboard) {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (gameboard.getBoard()[x][y] && gameboard.getBoard()[x][y].hits[y] || gameboard.getMissedAttacks().some(coord => coord[0] === x && coord[1] === y));

        attack(gameboard, x, y);
        return [x, y];
    }

    return { attack, autoAttack };
}

export default Player;
