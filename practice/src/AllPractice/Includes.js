//Returns true if the variable includes the given word or even a letter of it

let word = "hello";
let anotherWord = "world";

let checker = (inputs) => {
  return inputs.includes("hello") || inputs.includes("w");
};

console.log(checker(word));
console.log(checker(anotherWord));
