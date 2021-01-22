//  Implement the enqueue and dequeue methods
class QueueTwoStacks {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }
    enqueue(item) {
        this.inStack.push(item);
    }

    dequeue() {
        if (this.outStack.length == 0 && this.inStack.length > 0) {
            while (this.inStack.length > 0) {
                let item = this.inStack.pop();
                this.outStack.push(item);
            }
        } else if (this.outStack.length == 0 && this.inStack.length == 0) {
            throw new Error('Empty queue');
        }
        return this.outStack.pop();
    }
}
// O(m) time for m enqueues and dequeues 
// O(1) time per item

// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}