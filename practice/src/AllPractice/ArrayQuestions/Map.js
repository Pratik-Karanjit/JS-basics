//No need to call props.
//return statement is needed in both the lines; 1st return for myFunc to return the new array. 2nd return for map method to create the new array.
let myArray = [1, 2, 3, 4, 5];

let myFunc = () => {
  return myArray.map((value, i) => {
    return value * 2;
  });
};

console.log(myFunc());
