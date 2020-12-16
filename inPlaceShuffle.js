function getRandom(floor, ceiling) {
    // to randomize 0 and 1, you want Math.floor(Math.random() * 2) for equal chances of 0 and 1
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
    // Shuffle the input in place
    for (let i = 0; i < array.length; i++) {
        randomIndex = getRandom(i, array.length - 1);
        if (randomIndex != i) {
            let holder = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = holder;
        }
    }
}

//O(n) time and O(1) space
//Fisher-Yates shuffle (or Knuth shuffle)

const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);