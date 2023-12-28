let _value = [1,2,3].map((value,i) => {   // It takes two parameters: value (the current element in the array) and i (the index of the current element)
  return value*2; 
});

console.log(_value)



let myArray = [5,10,15,20]       //here I have defined variable outside the function

let outputVar = myArray.map((value, i) => {
    return value*2
})

console.log(outputVar)      //logging the function variable as map method creates a new array
                        