//Splice modifies the original array itself so as we have created a function for creating a new array, we need to return it after it is spliced.
let fruits = ["apple", "orange", "banana", "dates"];

let myFruits = (input) => {
  input.splice(2, 1, "new fruit") && input.splice(3, 1, "another");
  return input;
};

console.log(myFruits(fruits));
