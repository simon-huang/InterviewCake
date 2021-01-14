function getPermutations(string) {
    // Generate all permutations of the input string
    if (string.length <= 1) {
        return new Set([string]);
    }
    let allCharsExceptLast = string.slice(0, -1);
    let lastChar = string.slice(-1);
    let permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
    let permutations = new Set();
    permutationsOfAllCharsExceptLast.forEach(incompletePermutation => {
        for (let position = 0; position <= allCharsExceptLast.length; position++) {
            let permutation = incompletePermutation.slice(0, position) + lastChar + incompletePermutation.slice(position);
            permutations.add(permutation);
        }
    });
    return permutations;
}

// Tests
let desc = 'empty string';
let input = '';
let actual = getPermutations(input);
let expected = new Set(['']);
assert(isSetsEqual(actual, expected), desc);

desc = 'one character string';
input = 'a';
actual = getPermutations(input);
expected = new Set(['a']);
assert(isSetsEqual(actual, expected), desc);

desc = 'two character string';
input = 'ab';
actual = getPermutations(input);
expected = new Set(['ab', 'ba']);
assert(isSetsEqual(actual, expected), desc);

desc = 'three character string';
input = 'abc';
actual = getPermutations(input);
expected = new Set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
assert(isSetsEqual(actual, expected), desc);

function isSetsEqual(as, bs) {
    if (as.size !== bs.size) {
        return false;
    }
    for (let a of as) {
        if (!bs.has(a)) return false;
    }
    return true;
}

function assert(condition, desc) {
    if (condition) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL`);
    }
}