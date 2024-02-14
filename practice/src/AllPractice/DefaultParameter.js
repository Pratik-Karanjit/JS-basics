//By passing b=9 in parameter itself, the function understands the value of b and outputs it
let defaultParameter = (a, b = 9) => {
  console.log(a);
  console.log(b);
};

defaultParameter(3);

//But if value was given when function was called and the value is also assigned in parameter then the value of parameter is neglected and value of function calling is taken
let defaultParameters = (a, b = 9) => {
  console.log(a);
  console.log(b);
};

defaultParameters(3, 6);
