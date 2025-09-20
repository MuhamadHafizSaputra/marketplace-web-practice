export let cart = [{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
}, {
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}];

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