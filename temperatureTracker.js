class TempTracker {
    constructor() {
        // For mode
        this.occurrences = new Array(111).fill(0); // Array of 0s at indices 0..110
        this.maxOccurrences = 0;
        this.mode = null;

        // For mean
        this.numberOfReadings = 0;
        this.totalSum = 0;
        this.mean = null;

        // For min and max
        this.minTemp = null;
        this.maxTemp = null;
    }

    insert(temperature) {
        // For mode
        this.occurrences[temperature]++;
        if (this.occurrences[temperature] > this.maxOccurrences) {
            this.mode = temperature;
            this.maxOccurrences = this.occurrences[temperature];
        }
        // For mean
        this.numberOfReadings++;
        this.totalSum += temperature;
        this.mean = this.totalSum / this.numberOfReadings;
        // For min and max
        if (this.maxTemp === null || temperature > this.maxTemp) {
            this.maxTemp = temperature;
        }
        if (this.minTemp === null || temperature < this.minTemp) {
            this.minTemp = temperature;
        }
    }

    getMax() {
        return this.maxTemp;
    }

    getMin() {
        return this.minTemp;
    }

    getMean() {
        return this.mean;
    }

    getMode() {
        return this.mode;
    }
}

// Tests
const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}