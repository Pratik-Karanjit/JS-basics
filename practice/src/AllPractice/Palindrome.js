let word = "No lemon, no Melon";

//regex pattern to remove it and replace it with no space
//change all to lower case
//split it to take it into array, reverse and return it in string
//check the two variables
let checker = (input) => {
  let replaceWord = input.replace(/[\W_]/g, "");
  let lowerWord = replaceWord.toLowerCase();
  let manipulateWord = lowerWord.split("").reverse().join("");
  return lowerWord === manipulateWord;
};
console.log(checker(word));
