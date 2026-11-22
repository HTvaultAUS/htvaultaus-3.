const products = [
  {
    id: 1,
    name: "AirPods 3rd Generation",
    price: 120,
    description: "Brand new and sealed. A premium wireless audio experience.",
    tag: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Creed Aventus 100ml",
    price: 200,
    description: "Luxury fragrance in a 100ml bottle.",
    tag: "FEATURED",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900&auto=format&fit=crop"
  }
];

const EMAIL = "jtresellsaus@gmail.com";
const PHONE = "+61 416 741 968";

const $ = id => document.getElementById(id);

let cart = [];

try {
  const saved = JSON.parse(localStorage.getItem("htVaultAusCart"));
  if (Array.isArray(saved)) {
    cart = saved.filter(item =>
      products.some(product => product.id === item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      item.quantity <= 99
    );
  }
} catch {
  cart = [];
}

let toastTimer;

function formatMoney(amount) {
  return amount.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD"
  });
}

function saveCart() {
  localStorage.setItem("htVaultAusCart", JSON.stringify(cart));
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("active");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("active");
  }, 2300);
}

/* PRODUCTS */

function renderProducts() {
  $("productGrid").innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.alt='Product image unavailable'"
        >
        <span class="product-tag">${product.tag}</span>
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="product-bottom">
          <span class="product-price">
            ${formatMoney(product.price)}
          </span>

          <button class="add-button" data-add="${product.id}">
            ADD TO BAG +
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/* CART */

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  $("cartCount").textContent = count;
  $("cartTotal").textContent = formatMoney(getCartTotal());

  if (cart.length === 0) {
    $("cartItems").innerHTML = `
      <p class="empty-cart">Your shopping bag is currently empty.</p>
    `;
    return;
  }

  $("cartItems").innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return "";

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">

        <div>
          <h3>${product.name}</h3>
          <p class="cart-item-price">
            ${formatMoney(product.price)}
          </p>

          <div class="quantity-controls">
            <button data-minus="${product.id}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-plus="${product.id}" aria-label="Increase quantity">+</button>
            <button class="remove-button" data-remove="${product.id}">
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    if (existing.quantity >= 99) {
      showToast("Maximum quantity reached.");
      return;
    }
    existing.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast("Added to your shopping bag.");
}

function changeQuantity(id, amount) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  if (item.quantity > 99) item.quantity = 99;

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  showToast("Item removed.");
}

/* DRAWER */

function openCart() {
  $("cartDrawer").classList.add("active");
  $("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
  $("closeCart").focus();
}

function closeCart() {
  $("cartDrawer").classList.remove("active");
  $("overlay").classList.remove("active");
  document.body.style.overflow = "";
}

/* PRODUCT BUTTONS */

$("productGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));
  openCart();
});

/* CART BUTTONS */

$("cartItems").addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");

  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

$("openCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("overlay").addEventListener("click", closeCart);
$("continueShopping").addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCart();
});

/* CONTACT COPY BUTTONS */

document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      showToast("Copied: " + value);
    } catch {
      showToast("Copy unavailable. Please select the contact details manually.");
    }
  });
});

/* CHECKOUT PLACEHOLDER */

$("checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your shopping bag is empty.");
    return;
  }

  showToast("Checkout is not connected yet. Payment setup is our next step.");
});

/* START */

renderProducts();
renderCart();

