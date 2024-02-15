let word = "No lemon, no Melon";

let checker = (input) => {
  let replaceWord = input.replace(/[\W_]/g, "");
  let lowerWord = replaceWord.toLowerCase();
  let manipulateWord = lowerWord.split("").reverse().join("");
  return lowerWord === manipulateWord;
};
console.log(checker(word));
