let func = (a,b,...c) => {
    let output = [a, b, ...c].reduce((pre,cur)=> {   //a value 1, b value 2 and c takes 3 and 4 as it has ...c
        return pre+cur
    },0)         
    return output
  }

let _func = func(1,2,3,4)
console.log(_func)