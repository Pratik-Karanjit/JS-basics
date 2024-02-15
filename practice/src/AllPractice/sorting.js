//Ascending order
let myArr = [5, 4, 3, 1, 2];

let myFunction = (input) => {
  return input.sort();
};

console.log(myFunction(myArr));

//Descending order
let myArray = [1, 2, 3, 4, 5];

let myFunc = (input) => {
  return input.sort((a, b) => b - a);
};

console.log(myFunc(myArray));

//Without function

let mySpace = [7, 6, 5, 4, 3];
mySpace.sort((a, b) => b - a);

console.log(mySpace);
