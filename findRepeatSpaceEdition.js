function findRepeat(numbers) {
    // Find a number that appears more than once
    let floor = 1;
    let ceiling = numbers.length - 1;
    //floor < ceiling will eventually stop because of the else statement
    while (floor < ceiling) {
        let midPoint = Math.floor(floor + (ceiling - floor) / 2);
        let itemsInLowerHalf = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] >= floor && numbers[i] <= midPoint) {
                itemsInLowerHalf++;
            }
        }
        if (itemsInLowerHalf > midPoint) {
            ceiling = midPoint;
        } else {
            //this will eventually cause floor to equal ceiling
            floor = midPoint + 1;
        }
    }
    return floor;
}

//O(1) space and O(n log n) time
//We can use binary search on a range of values, not just a range of indexes

//Tests

let desc = 'just the repeated number';
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}