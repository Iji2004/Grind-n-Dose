// JavaScript functionality for the sliding modal

// Get modal and buttons
const accountIcon = document.getElementById("accountIcon");
const modal = document.getElementById("accountModal");
const closeBtn = document.querySelector(".close");
const toSignUpLink = document.getElementById("toSignUp");
const toSignInLink = document.getElementById("toSignIn");

// Show modal
accountIcon.addEventListener("click", () => {
  modal.style.display = "flex"; // Make the modal visible  
  modal.classList.add("show");
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
  modal.classList.remove("show", "signup-active");
});

// Switch to Sign Up
toSignUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("signup-active");
});

// Switch to Sign In
toSignInLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("signup-active");
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"; // Hide the modal
    modal.classList.remove("show", "signup-active");
  }
});


let cart = [];

    function addToCart(item, price) {
      const existingItem = cart.find(cartItem => cartItem.item === item);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      } else {
        cart.push({ item, price, quantity: 1, totalPrice: price });
      }

      alert(`${item} added to cart!`);
    }

    function toggleCart() {
      const modal = document.getElementById('cartModal');
      const overlay = document.getElementById('overlay');
      
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
        overlay.style.display = 'none'; 
      } else {
        displayCartItems();
        modal.style.display = 'block';
        overlay.style.display = 'block';
      }
    }

    function displayCartItems() {
      const cartItems = document.getElementById('cartItems');
      const cartTotal = document.getElementById('cartTotal');
      cartItems.innerHTML = '';

      if (cart.length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty.</li>';
        cartTotal.textContent = 'Total: $0.00';
        return;
      }

      let total = 0;

      cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.item} x${item.quantity} - $${item.totalPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.totalPrice;
      });

      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
