// Example: Summing up an array of numbers using reduce

const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum up the array
const sum = numbers.reduce((pre, cur) => {
    // The pre stores the running sum
    // The cur is the current element in the array

    // Add the cur to the pre
    return pre + cur;
}, 0); // The '0' is the initial value for the pre

console.log(sum); // Output: 15
