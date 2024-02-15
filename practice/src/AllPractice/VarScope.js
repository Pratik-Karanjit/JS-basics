//b=5 becomes a global variable as it is not initialized by any keyword (var,let or const) so even when we clg it outside the functional scope we get b=5
//'a' on the other hand is assigned to value of 5 but has var initialization which creates it in functional scope. So a is only consolable in functional scope.
let _scope = () => {
  var a = (b = 5);
  //   console.log(a);
};

_scope();

// console.log(a);
console.log(b);
