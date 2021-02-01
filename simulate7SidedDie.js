function rand5() {
    return Math.floor(Math.random() * 5) + 1;
}

function rand7() {
    // Implement rand7() using rand5()
    const results = [
        [1, 2, 3, 4, 5],
        [6, 7, 1, 2, 3],
        [4, 5, 6, 7, 1],
        [2, 3, 4, 5, 6],
        [7, 0, 0, 0, 0]];
    let roll1 = rand5();
    let roll2 = rand5();
    while (results[roll1 - 1][roll2 - 1] == 0) {
        roll1 = rand5();
        roll2 = rand5();
    }
    return results[roll1 - 1][roll2 - 1];
}

function rand7_2() {
    // Implement rand7() using rand5()
    let roll1 = rand5();
    let roll2 = rand5();
    // Get a number 1-25
    while ((roll1 - 1) * 5 + roll2 > 21) {
        roll1 = rand5();
        roll2 = rand5();
    }
    // 1-21 % 7 == 0-6
    return ((roll1 - 1) * 5 + roll2) % 7 + 1;
}