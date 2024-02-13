//This setTimeOut and setInterval function is a higher order function that is taking a function as its argument

function helloWord() {
  return "Hello World";
}

setTimeout(() => {
  console.log(helloWord());
}, 2000);

setInterval(() => {
  console.log(helloWord());
}, 5000);
