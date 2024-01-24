let multiplication = (...number) => {
    let output = number.reduce((pre,cur)=> {
        return pre*cur
    })
    return output
}

console.log(multiplication(2,4))