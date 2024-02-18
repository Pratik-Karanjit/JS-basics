//Returns true even if one of the value meets the condition. Else it returns false.
let numbers = [2, 4, 6, 8, 11];

let myFunc = () => {
  return numbers.some((value) => {
    return value % 2 !== 0;
  });
};

console.log(myFunc());
