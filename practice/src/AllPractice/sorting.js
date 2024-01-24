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



//In descending
let _myArray = [9, 3, 4, 3, 1];

let _output = (inputs) => {
    return [...inputs].sort((a, b) => b - a); // Sorting in descending order
}

console.log(_output(_myArray));




//Main array descending order sorting

let mySpace = [7,6,5,4,3]
mySpace.sort((a,b) => b-a)


console.log(mySpace)