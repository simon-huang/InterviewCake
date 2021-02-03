// DP
function changePossibilities(amount, denominations) {
    let dp = new Array(amount + 1).fill(0); // const waysOfDoingNcents
    dp[0] = 1;
    denominations.forEach(coin => {
        for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
            const remainingAmount = currentAmount - coin;
            dp[currentAmount] += dp[remainingAmount];
        }
    });
    return dp[amount];
}
// O(n * m) time and O(n) space, where n is the amount of money and m is the number of potential denominations

// DFS
function changePossibilities2(amountLeft, denominations) {
    // Calculate the number of ways to make change
    let result = 0;
    function helper(amountLeft, denominations, index) {
        if (amountLeft == 0) {
            result++;
            return;
        }
        for (let i = index; i < denominations.length; i++) {
            if (amountLeft - denominations[i] >= 0) {
                helper(amountLeft - denominations[i], denominations, i);
            } else {
                break;
            }
        }
    }
    helper(amountLeft, denominations, 0);
    return result;
}
// top-down with memoization
class Change {
    constructor() {
        this.memo = {};
    }

    changePossibilitiesTopDown(amountLeft, denominations, currentIndex = 0) {
        // Check our memo and short-circuit if we've already solved this one
        const memoKey = [amountLeft, currentIndex].join(', ');
        if (this.memo.hasOwnProperty(memoKey)) {
            console.log('grabbing memo [' + memoKey + ']');
            return this.memo[memoKey];
        }
        // Base cases:
        // We hit the amount spot on. yes!
        if (amountLeft === 0) return 1;

        // We overshot the amount left (used too many coins)
        if (amountLeft < 0) return 0;

        // We're out of denominations
        if (currentIndex === denominations.length) return 0;

        console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

        // Choose a current coin
        const currentCoin = denominations[currentIndex];
        // See how many possibilities we can get
        // for each number of times to use currentCoin
        let numPossibilities = 0;
        while (amountLeft >= 0) {
            numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
            amountLeft -= currentCoin;
        }
        // Save the answer in our memo so we don't compute it again
        this.memo[memoKey] = numPossibilities;
        return numPossibilities;
    }
}
// Tests
let desc = 'sample input';
let actual = changePossibilities(4, [1, 2, 3]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'one way to make zero cents';
actual = changePossibilities(0, [1, 2]);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'no ways if no coins';
actual = changePossibilities(1, []);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big coin value';
actual = changePossibilities(5, [25, 50]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big target amount';
actual = changePossibilities(50, [5, 10]);
expected = 6;
assertEqual(actual, expected, desc);

desc = 'change for one dollar';
actual = changePossibilities(100, [1, 5, 10, 25, 50]);
expected = 292;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}