function Ship(length) {
    const hits = Array(length).fill(false);  // Initialize an array with "length" falses

    function hit(position) {
        hits[position] = true;
    }

    function isSunk() {
        return hits.every(hit => hit);  // Check if all parts of the ship are hit
    }

    function isHit(position) {  // Check if the ship is hit at a particular position
        return hits[position];
    }

    return { hit, isSunk, isHit };  // Expose isHit method
}

export default Ship;
