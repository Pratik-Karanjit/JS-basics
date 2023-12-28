// let ascending_ = (input) => {
//   return input.sort()
// }


// console.log(ascending_([2,1,3]));






let myArray = [5,4,3,2,1]

let output = (props) => {
    return [...props].sort()      //Ascending order
}

console.log(output(myArray));     //console.log(output(myArray)) because sort doesn't create new array, it modifies the original array