//Slice does not modify the original array.
//It can be returned before slicing unlike that of splice.
//.slice(1,4) means it will create a new array of indexes 1,2,3 only. 4 is ignored.

let fruits = ["apple", "orange", "banana", "dates"];

let myFruits = (input) => {
  return input.slice(1, 4);
};

console.log(fruits);
console.log(myFruits(fruits));
