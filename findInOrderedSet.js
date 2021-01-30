function contains(array, value) {
    // Check if an integer is present in the array
    let floorIndex = -1;
    let ceilingIndex = array.length;
    while (floorIndex + 1 < ceilingIndex) {
        const distance = ceilingIndex - floorIndex;
        const halfDistance = Math.floor(distance / 2);
        const guessIndex = floorIndex + halfDistance;

        const guessValue = array[guessIndex];
        if (guessValue === value) {
            return true;
        }
        if (guessValue > value) {
            ceilingIndex = guessIndex;
        } else {
            floorIndex = guessIndex;
        }
    }
    return false;
}
// O(log n) time and O(1) space

// Tests
let desc = 'empty array';
let actual = contains([], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'one item array, number present';
actual = contains([1], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one item array, number absent';
actual = contains([1], 2);
expected = false;
assertEquals(actual, expected, desc);

desc = 'small array, number present';
actual = contains([2, 4, 6], 4);
expected = true;
assertEquals(actual, expected, desc);

desc = 'small array, number absent';
actual = contains([2, 4, 6], 5);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number present';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number absent';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number first';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number last';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
expected = true;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}