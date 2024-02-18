//Filter method creates a new array of the filtered elements only. Unlike map method that created the exact numbers of elements in the original and new arrays.
//It filters out the test that is provided in the function and returns it in an array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myFunc = () => {
  return numbers.filter((value) => {
    return value % 3 === 0;
  });
};

console.log(myFunc());
