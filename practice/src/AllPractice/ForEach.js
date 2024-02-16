// forEach function that iterates over the array and consoles value with its index

let myArray = ["apple", "orange", "banana"];

let forEachFunc = (input) => {
  return input.forEach((value, i) => {
    console.log(value, i);
  });
};

forEachFunc(myArray);
