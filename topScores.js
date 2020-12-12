function sortScores(unorderedScores, highestPossibleScore) {
    // Sort the scores in O(n) time
    let scoreCounts = new Array(highestPossibleScore + 1).fill(0);
    unorderedScores.forEach(score => {
        scoreCounts[score]++;
    });
    let sortedScores = [];
    for (let i = unorderedScores.length - 1; i >= 0; i--) {
        for (let j = 0; j < unorderedScores[i]; j++) {
            sortedScores.push(i);
        }
    }
    return sortedScores;
}

//O(n) time and space