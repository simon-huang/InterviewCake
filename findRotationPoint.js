function findRotationPoint(words) {
    // Find the rotation point in the vector
    let start = 0;
    let end = words.length - 1;
    while (start < end) {
        let i = Math.floor((start + end) / 2);
        if (words[i] < words[i - 1]) {
            return i;
        } else if (words[i] < words[start]) {
            end = i;
        } else {
            start = i;
        }
        if (start + 1 == end) { //if rotation point is the last index. A binary search can't reach the end or beginning
            return end;
        }
    }
    return -1;
}
//if we can't assume array has a rotation point, add a check for first and last index

//O(log n) time and O(1) space
//More accurately, because comparing words takes time, if k is how long it takes, it's O(k*log n) time
/*
const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];
*/

// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
    'undulate', 'xenoepist', 'asymptote',
    'babka', 'banoffee', 'engender',
    'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}