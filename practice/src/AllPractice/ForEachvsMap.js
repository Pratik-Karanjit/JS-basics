let myArr = [1, 2, 3, 4, 5];

let mapArr = myArr.map((value, i) => {
  return value * 2;
});

let forEachArr = myArr.forEach((value, i) => {
  return value * 2;
});

console.log(myArr);
console.log(mapArr); //Map creates a new array
console.log(forEachArr); //ForEach does not create a new array. Only iterates over the existing so this cannot return the array in a new variable.Therefore, gives undefined.
