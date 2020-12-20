function hasPalindromePermutation(theString) {
    let oddLetters = new Set();
    for (let char of theString) {
        if (oddLetters.has(char)) {
            oddLetters.delete(char);
        } else {
            oddLetters.add(char);
        }
    }
    return oddLetters.size <= 1;
}

//O(n) time, and O(1) space (only 128 ASCII characters)

console.log(hasPalindromePermutation('aabccbdd')) //true
console.log(hasPalindromePermutation('aabcd')) //false

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}
/*
function hasPalindromePermutation(theString) {
    // Check if any permutation of the input is a palindrome
    var tally = {};
    var odd = 0;
    theString.split('').forEach(function (letter) {
        tally[letter] ? tally[letter]++ : tally[letter] = 1
    });
    for (var key in tally) {
        if (tally[key] % 2 == 1) {
            odd++;
        }
        if (odd > 1) {
            return false;
        }
    }
    return true;
}
*/