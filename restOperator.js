//make a function that takes any number of inputs and returns the sum of the inputs

let sum = (...inputs)=> {                   //takes the inputs when the function is called
    let output = inputs.reduce((pre,cur)=>{                 //reduce function has previous and current values
        return pre+cur
    },0)                            //Always give initial value when using reduce function
    return output
}

let _sum = sum(1,2,3,4)
console.log(_sum)