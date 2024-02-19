//FlatMap is used to flatten array of arrays into a single array.
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//The callback function simply returns the inner array itself
let flattening = numbers.flatMap((number) => number);
console.log(flattening);
