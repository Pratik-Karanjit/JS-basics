//To separate each word with ' ' and give output in array we can use split operator
let myArray = (input) => {
  return input.split(" ");
};

console.log(myArray("hello friends this is John Doe."));

//This is to separate each letter and give output in array
//Only the space is removed from split(' ')
let thisArray = (input) => {
  return input.split("");
};

console.log(thisArray("hello friends this is John Doe."));
