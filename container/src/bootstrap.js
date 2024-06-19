import { mountProducts } from "products/ProductsIndex";
import {mountCart} from "cart/CartShow";
// const el = document.querySelector("#my-products");
// console.log(el);
// if (el) {
//   mountProducts(el);
// }

// const elCart = document.querySelector("#my-cart");
// if (elCart) {
//   mountCart(elCart);
// }

mountProducts(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
