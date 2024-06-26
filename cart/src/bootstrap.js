import faker from "faker";
// const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
// document.querySelector("#dev-cart").innerHTML = cartText;

const mountCart = (el) => {
  let cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
      console.log(el);
    mountCart(el);
  }
}

export { mountCart };
