function getClosingParen(sentence, openingParenIndex) {
    // Find the position of the matching closing parenthesis
    let count = 0;
    for (let i = openingParenIndex; i < sentence.length; i++) {
        if (sentence[i] == '(') {
            count++;
        } else if (sentence[i] == ')') {
            count--;
            if (count == 0) {
                return i;
            }
        }
    }
    throw new Error('No closing parenthesis');
}
// O(n) time and O(1) space

// Tests
let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => (getClosingParen('()(()', 2));
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
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