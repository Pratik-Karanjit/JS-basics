//The find method returns only the first element that matches the condition.
//It does not return in an array. Returns just the value.

let fruits = ["apple", "orange", "banana", "mango", "dates"];

let myFunc = () => {
  return fruits.find((value) => {
    return value.length > 5;
  });
};

console.log(myFunc());
