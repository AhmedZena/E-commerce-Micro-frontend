import faker from 'faker';

let products = '';

for (let i = 0; i < 10; i++) {
const name = faker.commerce.productName();
products += `<div>${name}</div>`;
}

// console.log(products);
let rootProductsList = document.querySelector("#products-list");
rootProductsList.innerHTML = products;