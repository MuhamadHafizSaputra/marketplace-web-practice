import {cart, removeFromCart} from "../data/cart.js";
import {products} from "../data/products.js";

let html='';

cart.forEach((itemCart) => {
  let productId = itemCart.id;

  products.forEach((itemProduct) => {
    if (itemProduct.id === productId) {
      html += `<div class="cart-item-container js-delete-${itemProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image" src="${itemProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${itemProduct.name}
                </div>
                <div class="product-price">
                  $${(itemProduct.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${itemCart.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete" data-product-id="${itemProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${itemProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${itemProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${itemProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
    }
  })
})

document.querySelector('.js-order-summary').innerHTML = html;

const deleteElements = document.querySelectorAll('.js-delete');

deleteElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    const productId = element.dataset.productId;
    removeFromCart(productId);
    document.querySelector(`.js-delete-${productId}`).remove();
})

})
