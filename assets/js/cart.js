let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

function loadCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.value}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <button onclick="removeFromCart(${index})">Remove</button>
      </td>
    `;
    cartItems.appendChild(row);
    total += item.price;
  });

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

document.getElementById("checkout-button").addEventListener("click", () => {
  if (cart.length > 0) {
    alert("Checkout successful!");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  } else {
    alert("Your cart is empty!");
  }
});

document.addEventListener("DOMContentLoaded", loadCart);