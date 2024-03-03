// + operator
console.log(2 + 3); //adds up
console.log("2" + "3"); //concatenate
console.log(typeof (2 + "3")); //If string and number even concatenated, the data type is always string
console.log(2 + "3"); //output "23"

console.log(typeof (1 + 2 + 3 + "4")); //String datatype output even though multiple numbers are concatenated
console.log(1 + 2 + 3 + "4"); //output "64"

//NaN
console.log("a" + "b"); //This just concatenates
console.log("a" - "b"); //When - or * or / or any other mathematical expression is used with string, it returns NaN (not a number)

console.log("1" - "2"); //output is -1 because JS first tries to convert string into number after that its 1-2
console.log(typeof ("1" - "2")); // type is number
console.log("3" * "43"); //Same with multiplication
console.log("4" / "2"); //Same with division
