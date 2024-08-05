function checkNumbers(num1, num2) {
    if (num1 === 8 || num2 === 8 || (num1 + num2) === 8 || Math.abs(num1 - num2) === 8) {
        return true;
    } else {
        return false;
    }
}

// Example usage
console.log(checkNumbers(8, 0));  // true
console.log(checkNumbers(3, 5));  // true
console.log(checkNumbers(10, 2)); // true
console.log(checkNumbers(1, 1));  // false