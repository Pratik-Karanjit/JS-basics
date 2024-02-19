//Firstly it is taken into array by splitting. Then, some method is used as callback function to return either true or false depending on the capitalized/non capitalized first letter.
//If index 0's value is === value's upper case then it returns true else false.
let word = "Example";

let firstCap = word.split("").some((value, i) => {
  if (i === 0) {
    return value === value.toUpperCase();
  } else {
    return false;
  }
});

console.log(firstCap);
