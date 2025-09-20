export let cart = [];

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
}