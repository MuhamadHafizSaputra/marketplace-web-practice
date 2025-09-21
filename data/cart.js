export let cart = JSON.parse(localStorage.getItem("item"))

export function saveToStorage () {
  localStorage.setItem("item", JSON.stringify(cart));
}

export function addToCart (button) {
  let sameProduct;

    cart.forEach((productCart) => {
      if (button.dataset.productId === productCart.id) {
        sameProduct = productCart
      }
    })

    if (sameProduct) {
      sameProduct.quantity += 1
    }else {
        cart.push({
          id: button.dataset.productId,
          name: button.dataset.productName,
          quantity: 1
        })
      }
  saveToStorage();
}

export function removeFromCart (productId) {
  let newCart = [];

  cart.forEach((item) => {
    if (!(item.id === productId)) {
      newCart.push(item);
    }
  })

  cart = newCart;
  saveToStorage();
}