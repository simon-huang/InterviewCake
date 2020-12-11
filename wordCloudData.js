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
