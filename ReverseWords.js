function reverseWords(message) {
    reverse(message, 0, message.length - 1);
    var start = 0;
    for (var i = 0; i <= message.length; i++) {
        if (i == message.length || message[i] == ' ') {
            reverse(message, start, i - 1);
            start = i + 1;
        }
    }
    return message;
}

function reverse(str, startIndex, endIndex) {
    var holder;
    while (startIndex < endIndex) {
        holder = str[startIndex];
        str[startIndex] = str[endIndex];
        str[endIndex] = holder;
        startIndex++;
        endIndex--;
    }
    return str;
}
const example = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];

console.log(reverseWords(example));

// Complexity: O(n) time and O(1) space

/*
function reverseWords(message) {

  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {

    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {

      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

function reverseCharacters(message, leftIndex, rightIndex) {

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {

    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}
*/