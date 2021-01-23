function isValid(code) {
    // Determine if the input code is valid
    let stack = [];
    for (let char of code) {
        if (char == '(') {
            stack.push(')');
        } else if (char == '[') {
            stack.push(']');
        } else if (char == '{') {
            stack.push('}');
        } else {
            if (char !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length == 0;
}
// O(n) time and O(n) space

// Tests
let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}