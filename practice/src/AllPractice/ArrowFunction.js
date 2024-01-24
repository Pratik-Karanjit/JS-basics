const variableFunction = () => {
    let a = 5;
    let b = 14;
    
    if (a >= b) {
        return "A is greater than or equal to b.";
    } else if (a < b) {
        return "A is less than b.";
    } else {
        return "B is greater than or equal to A.";
    }
};

    console.log(variableFunction());
