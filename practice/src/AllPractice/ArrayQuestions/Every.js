//Returns only true or false.
//Returns true if all conditions are met. Else it returns false.
let numbers = [2, 4, 6, 8, 10];

let checkLength = () => {
  return numbers.length;
};
console.log("The length of my array is:", checkLength());

let myFunc = () => {
  return numbers.every((value) => {
    return value % 2 === 0;
  });
};

console.log(myFunc());

// every(() => {

// })
