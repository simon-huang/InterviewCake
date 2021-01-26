// Implement methods to track the max, min, mean, and mode
class TempTracker {
    constructor() {
        this.min = null;
        this.max = null;
        this.frequencyMap = {};
        this.mode = null;
        this.total = 0;
        this.count = 0;
    }

    insert(temperature) {
        if (this.min == null) {
            this.min = temperature;
            this.max = temperature;
            this.frequencyMap[temperature] = 1;
            this.mode = temperature;
            this.total += temperature;
            this.count++;
            return;
        }
        this.min = Math.min(this.min, temperature);
        this.max = Math.max(this.max, temperature);
        if (!this.frequencyMap.hasOwnProperty(temperature)) {
            this.frequencyMap[temperature] = 0;
        }
        this.frequencyMap[temperature]++;
        if (this.mode !== temperature && this.frequencyMap[this.mode] < this.frequencyMap[temperature]) {
            this.mode = temperature;
        }
        this.total += temperature;
        this.count++;
    }

    getMax() {
        return this.max;
    }

    getMin() {
        return this.min;
    }

    getMean() {
        return this.total / this.count;
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