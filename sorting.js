// let ascending_ = (input) => {
//   return input.sort()
// }


// console.log(ascending_([2,1,3]));





//To create a new array and keep the original unchanged
let myArray = [5,4,3,2,1]

let output = (inputs) => {
    return [...inputs].sort()      //Ascending order
}

console.log(output(myArray));     //console.log(output(myArray)) because sort doesn't create new array, it modifies the original array
 



//To sort the original array
let myArray_ = [5, 4, 3, 2, 1];

myArray_.sort();

console.log(myArray_);
