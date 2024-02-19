//Question is to extract the product id and category of those products whose price > 2000.
//Firstly, the array is filtered to only products whose price is > 2000.
//This provides all the details so in order to extract id and category we use map method.
let products = [
  {
    id: 1,
    title: "Product 1",
    category: "electronics",
    price: 5000,
    description: "This is description and Product 1",
    discount: {
      type: "other",
    },
  },
  {
    id: 2,
    title: "Product 2",
    category: "cloths",
    price: 2000,
    description: "This is description and Product 2",
    discount: {
      type: "other",
    },
  },
  {
    id: 3,
    title: "Product 3",
    category: "electronics",
    price: 3000,
    description: "This is description and Product 3",
    discount: {
      type: "other",
    },
  },
];

let idArray = products
  .filter((product) => product.price > 2000)
  .map((product) => {
    return { id: product.id, category: product.category };
  });
console.log(idArray);
