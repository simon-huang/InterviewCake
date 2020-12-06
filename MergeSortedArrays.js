function mergeArrays(myArray, alicesArray) {
    var merged = [];
    var myIndex = 0;
    var aliceIndex = 0;
    while (myIndex < myArray.length || aliceIndex < alicesArray.length) {
        if (alicesArray[aliceIndex] == undefined || myArray[myIndex] < alicesArray[aliceIndex]) {
            merged.push(myArray[myIndex]);
            myIndex++;
        } else {
            merged.push(alicesArray[aliceIndex]);
            aliceIndex++;
        }
    }
    return merged;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

// O(n) time and space

/*
OFFICIAL SOLUTION
function mergeArrays(myArray, alicesArray) {

  // Set up our mergedArray
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}
*/

/*
function mergeArrays(myArray, alicesArray) {
    var merged = [];
    var myIndex = 0;
    var aliceIndex = 0;
    while (myIndex < myArray.length || aliceIndex < alicesArray.length) {
        if (myArray[myIndex] < alicesArray[aliceIndex] || alicesArray[aliceIndex] == undefined) {
            merged.push(myArray[myIndex]);
            myIndex++;
        } else if (myArray[myIndex] >= alicesArray[aliceIndex] || myArray[myIndex]  == undefined) {
            merged.push(alicesArray[aliceIndex]);
            aliceIndex++;
        }
    }
    return merged;
}
*/
/*
function mergeArrays(myArray, alicesArray) {
    var merged = [];
    var myIndex = 0;
    var aliceIndex = 0;
    while (myIndex < myArray.length || aliceIndex < alicesArray.length) {
        if (myArray[myIndex] < alicesArray[aliceIndex] || alicesArray[aliceIndex] == undefined) {
            merged.push(myArray[myIndex]);
            myIndex++;
        } else if (myArray[myIndex] > alicesArray[aliceIndex] || myArray[myIndex]  == undefined) {
            merged.push(alicesArray[aliceIndex]);
            aliceIndex++;
        } else if (myArray[myIndex] == alicesArray[aliceIndex]){
            merged.push(myArray[myIndex]);
            merged.push(alicesArray[aliceIndex]);
            myIndex++;
            aliceIndex++;
        }
    }

    return merged;
}
*/
