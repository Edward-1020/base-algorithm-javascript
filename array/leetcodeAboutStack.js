const {ArrayStack} = require('./ArrayStack');

const isValid = (str) => {
    let arrayStack = new ArrayStack();
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        if (c == '(' || c== '[' || c == '{') {
            arrayStack.push(c);
        } else {
            if (arrayStack.isEmpty()) {
                return false;
            }

            let topC = arrayStack.pop();
            if (c == ')' && topC != '(') {
                return false;
            }
            if (c == ']' && topC != '[') {
                return false;
            }
            if (c == '}' && topC != '{') {
                return false;
            }
        }
    }

    return arrayStack.isEmpty();
};