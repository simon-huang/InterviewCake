// Without recursion
function fib(n) {
    // Compute the nth Fibonacci number
    if (n < 0) {
        throw new Error('Negative index');
    } else if (n <= 1) {
        return n;
    }
    let prevPrev = 0, prev = 1;
    let current;
    for (let i = 1; i < n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }
    return current;
}
// O(n) time and O(1) space 

// With memoization
function fib2(n, memo = {}) {
    if (n == 0 || n == 1) {
        return n;
    }
    if (memo.hasOwnProperty(n)) {
        return memo[n];
    }
    let result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result;
}
// O(n) time

// Memoization with an instance variable
class Fibber {
    constructor() {
        this.memo = {};
    }

    fib(n) {

        // Edge case: negative index
        if (n < 0) {
            throw new Error('Index was negative. No such thing as a negative index in a series.');
        }

        // Base case: 0 or 1
        else if (n === 0 || n === 1) {
            return n;
        }

        // See if we've already calculated this
        if (this.memo.hasOwnProperty(n)) {
            return this.memo[n];
        }

        const result = this.fib(n - 1) + this.fib(n - 2);

        // Memoize
        this.memo[n] = result;

        return result;
    }
}

// Without memoization
function fib3(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
// O(2^n) time

// Tests
let desc = 'zeroth fibonacci';
let actual = fib(0);
let expected = 0;
assertEqual(actual, expected, desc);

desc = 'first fibonacci';
actual = fib(1);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'second fibonacci';
actual = fib(2);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'third fibonacci';
actual = fib(3);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'fifth fibonacci';
actual = fib(5);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'tenth fibonacci';
actual = fib(10);
expected = 55;
assertEqual(actual, expected, desc);

desc = 'negative fibonacci';
const negativeFib = () => (fib(-1));
assertThrowsError(negativeFib, desc);

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