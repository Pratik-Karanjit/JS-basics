//Splice modifies the original array itself so as we have created a function for creating a new array, we need to return it after it is spliced.
let fruits = ["apple", "orange", "banana", "dates"];

let myFruits = (input) => {
  input.splice(2, 2, "new fruit");
  return input;
};

console.log(myFruits(fruits));
