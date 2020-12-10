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