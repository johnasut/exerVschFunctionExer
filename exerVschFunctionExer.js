function sum2(a, b) {
    return a + b;
}

function sumLarge3(a, b, c) {
    return Math.max(a, b, c);
}

function evenOdd(a) {
    if (a % 2 === 0) {
        return "even"
    } else if (a % 2 === 1) {
        return "odd"
    } else {
        return "not a whole number"
    }
}

function string2(a) {
    if (a.length <= 20) {
        return a.concat(a);
    } else {
        return a.slice(0, (a.length)/2)
    }
}


function fibonacciSum(num) { 
    var num1 = 0; 
    var num2 = 0; 
    var sum = 0; 
    var fsum = 0;
    for (i = 1; i <= num; i++) { 
        if (i === 1) {
            num1 = 0;
            num2 = 1;
            fsum = fsum += num2;
            console.log(num2);
        } else if (i === 2) {
            num1 = 1;
            num2 = 1;
            fsum = fsum += num2;
            console.log(num2);
        } else {
        sum = num1 + num2; 
        num1 = num2; 
        num2 = sum;
        fsum = fsum += num2;
        console.log(num2);
        }
    } 
    return fsum; 
}


function maxCharacter(a) {
    let charCount = {};
    let most = 0;
    let maxChar = '';
    for (let abc of a) {
        if (charCount[abc]) {
            charCount[abc]++;
        } else {
            charCount[abc] = 1;
        }
    }
    for (let abc in charCount) {
        if (charCount[abc] > most) {
            most = charCount[abc];
            maxChar = abc;
        }
    }
    console.log(charCount);
    console.log(most);
    return maxChar;
}