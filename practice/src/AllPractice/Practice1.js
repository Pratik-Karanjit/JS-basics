let words = ["apple", "banana", "cat", "dog"];

let myFunc = () => {
  return words.every((value) => {
    return typeof value === "string" && value.length > 2;
  });
};

console.log(myFunc());
