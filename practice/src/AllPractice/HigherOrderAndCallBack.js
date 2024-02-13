//Higher order function is a function that takes a function as a parameter or returns a function back to you.
//Callback function is a function that is passed as an argument to another function. showResults is callback function that was passed in add(2,3,showResults)

//Add function that takes a function as a parameter
function add(a, b, c) {
  let result = a + b;
  c(result);
}

function showResults(result) {
  console.log(result);
}

add(2, 3, showResults);
