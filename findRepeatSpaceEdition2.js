function findDuplicate(intArray) {
    // Find a number that appears more than once ... in O(n) time
    for (number of intArray) {
        number--;
    }
    let head = intArray.length - 1;
    let current = head;
    //To definitely enter a loop
    for (let i = 0; i < head; i++) {
        current = intArray[current];
    }
    //To determine size of loop
    let pointer = current;
    current = intArray[current];
    let size = 1;
    while (current !== pointer) {
        current = intArray[current];
        size++;
    }
    current = head;
    for (let i = 0; i < size; i++) {
        current = intArray[current];
    }
    let slow = head;
    let fast = current;
    while (slow !== fast) {
        fast = intArray[fast];
        slow = intArray[slow];
    }
    return slow + 1;
}

// Tests
let desc = 'just the repeated number';
let actual = findDuplicate([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findDuplicate([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findDuplicate([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findDuplicate([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}