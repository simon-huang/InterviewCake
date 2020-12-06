function reverse(arrayOfChars) {
// Reverse the input array of characters in place
    var holder;
    for (var i = 0; i < Math.floor(arrayOfChars.length/2); i++) {
        holder = arrayOfChars[i];
        arrayOfChars[i] = arrayOfChars[arrayOfChars.length-1-i];
        arrayOfChars[arrayOfChars.length-1-i] = holder;
    } 
    return arrayOfChars;
    //Complexity: O(n) time and O(1) space
}

/*
//Solution
  function reverse(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
*/