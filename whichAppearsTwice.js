function findRepeat(numbers) {
    // Find the number that appears twice
    if (numbers.length < 2) {
        throw new Error('Finding a duplicate requires at least two numbers');
    }
    const n = numbers.length - 1;
    // sum of triangular series
    const sumWithoutDuplicate = (n + 1) * n / 2;
    let actualSum = 0;
    numbers.forEach(number => actualSum += number);
    return actualSum - sumWithoutDuplicate;
}
// O(n) time and O(1) space

// Tests
let desc = 'short array';
let actual = findRepeat([1, 2, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([4, 1, 3, 4, 2]);
expected = 4;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
expected = 2;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}