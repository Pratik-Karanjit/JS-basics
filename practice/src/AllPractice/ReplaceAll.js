//ReplaceAll needs the word that needs to be replaced and the word which is replacing it.

let aboutMe = "Pratik is a programmer. Pratik likes coding in JavaScript.";

let replaceName = (input) => {
  return input.replaceAll("Pratik", "Ram");
};

console.log(replaceName(aboutMe));
