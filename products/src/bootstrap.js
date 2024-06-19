import faker from "faker";

const mountProducts = (el) => {
  let products = "";

  console.log(products);
  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  console.log(products);
  el.innerHTML = products;
};

// console.log(products);
// let rootProductsList = document.querySelector("#products-list");
// rootProductsList.innerHTML = products;

// create a div

// we have two scenarios
// 1. running the file in development in isolation
// we are using the file in development in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products-list");
  console.log(el);
  el ? mountProducts(el) : null;
}

// 2. running the file in development or production through the container
// we are using the file through the container
export { mountProducts };