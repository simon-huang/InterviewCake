/*
QUESTION
A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.

If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.

Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.

EXPLANATION
The worst case total number of drops increases by one each time the first egg doesn't break

For example, if the egg breaks on our first drop from the 10th floor, we may have to drop the second egg at each floor between 1 and 9 for a worst case of 10 total drops. But if the egg breaks when we skip to the 20th floor we will have a worst case of 11 total drops (once for the 10th floor, once for the 20th, and all of the floors between 11 and 19)!

Since the maximum number of drops increases by one each time we skip the same amount of floors, we could skip one fewer floor each time we drop the first egg!

To be able to decrease the number of floors we skip by one every time we move up, and to minimize the number of floors we skip the first time, we want to end up skipping just one floor at the very top.

SOLUTION
n + (n-1) + (n−2) + ... + 1 = 100

(n+1)*(n/2) = Total sum of a triangular series

(n^2 + n)/2 = 100

n^2 + n - 200 = 0

n = 13.651 = 14

Worst-case number of drops = 14
*/