/*
In our solution, we make four decisions:

1. We use a class. This allows us to tie our methods together, calling them on instances of our class instead of passing references.
2. To handle duplicate words with different cases, we choose to make a word uppercase in our map only if it is always uppercase in the original string. While this is a reasonable approach, it is imperfect (consider proper nouns that are also lowercase words, like "Bill" and "bill").
3. We build our own splitWords() method instead of using a built-in one. This allows us to pass each word to our addWordToMap() method as it was split, and to split words and eliminate punctuation in one iteration.
4. We make our own isLetter() method instead of using regular expressions. Either approach would work for this challenge.
*/

class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {
        let startIndex = 0;
        let wordLength = 0;
        for (let i = 0; i < inputString.length; i++) {
            if (i == inputString.length - 1 && wordLength != 0) {
                if (this.isLetter(inputString[i])) {
                    wordLength++;
                }
                this.addToMap(inputString.slice(startIndex, startIndex + wordLength));
            } else if (this.isLetter(inputString[i]) || inputString[i] == "\'") {
                if (wordLength == 0) {
                    startIndex = i;
                }
                wordLength++;
            } else if (inputString[i] == '-' && this.isLetter(inputString[i - 1]) && this.isLetter(inputString[i + 1])) {
                wordLength++;
            } else {
                if (wordLength > 0) {
                    this.addToMap(inputString.slice(startIndex, startIndex + wordLength));
                    wordLength = 0;
                }
            }
        }
    }

    addToMap(word) {
        //.has .set .get .delete
        let counts = this.wordsToCounts;
        if (counts.has(word) || counts.has(word.toLowerCase())) {
            counts.set(word, counts.get(word) + 1);
        } else if (counts.has(this.capitalize(word))) {
            counts.set(word, counts.get(this.capitalize(word)) + 1);
            counts.delete(this.capitalize(word));
        } else {
            counts.set(word, 1);
        }
    }

    capitalize(word) {
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalized;
    }

    isLetter(char) {
        return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) != -1;
    }
}
//O(n) time and space

// Tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'longer sentence';
actual = new WordCloudData('Chocolate cake for dinner and pound cake for dessert').wordsToCounts;
expected = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
['Chocolate', 1], ['dinner', 1], ['cake', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'punctuation';
actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts;
expected = new Map([['cake', 1], ['Strawberry', 1], ['short', 1], ['Yum', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'hyphenated Words';
actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts;
expected = new Map([['cake', 1], ['Dessert', 1], ['mille-feuille', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'ellipses between words';
actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
expected = new Map([['mmm', 2], ['decisions', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'apostrophes';
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
expected = new Map([['Bakery', 1], ['Cakes', 1], ["Allie's", 1], ["Sasha's", 1]]);
assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        const testVal = map2.get(key);

        // In cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
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