
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  background: #080808;
  color: #fff;
  font-family: 'DM Sans', Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}

/* NAVBAR */

.navbar {
  height: 82px;
  padding: 0 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #080808;
  border-bottom: 1px solid #242424;
  position: sticky;
  top: 0;
  z-index: 50;
}

.logo {
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 2px;
}

.logo span {
  color: #888;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  color: #bbb;
  font-size: 13px;
  transition: color .2s;
}

.nav-links a:hover {
  color: white;
}

.cart-button {
  background: white;
  color: black;
  border: 0;
  padding: 12px 18px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

/* HERO */

.hero {
  min-height: 570px;
  padding: 100px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 80% 45%, #292929 0%, transparent 48%),
    linear-gradient(110deg, #080808, #151515);
}

.hero-content {
  max-width: 650px;
  position: relative;
  z-index: 1;
}

.eyebrow {
  color: #999;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: clamp(48px, 8vw, 88px);
  line-height: .98;
  letter-spacing: -4px;
  font-weight: 800;
  margin-bottom: 25px;
}

.hero-description {
  color: #aaa;
  font-size: 15px;
  line-height: 1.8;
  max-width: 440px;
  margin-bottom: 32px;
}

.hero-button {
  display: inline-block;
  background: white;
  color: black;
  padding: 16px 24px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  transition: background .2s;
}

.hero-button:hover {
  background: #ccc;
}

.hero-side-text {
  color: #666;
  font-size: 11px;
  letter-spacing: 4px;
  writing-mode: vertical-rl;
}

/* SHOP */

.shop-section {
  padding: 100px 7%;
  background: #0b0b0b;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 38px;
}

.section-heading h2 {
  font-size: 36px;
  letter-spacing: -1px;
}

.collection-count {
  color: #777;
  font-size: 11px;
  letter-spacing: 2px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.product-card {
  background: #121212;
  border: 1px solid #252525;
  overflow: hidden;
  transition: transform .25s, border-color .25s;
}

.product-card:hover {
  transform: translateY(-5px);
  border-color: #555;
}

.product-image {
  height: 330px;
  background: linear-gradient(145deg, #292929, #111);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.product-placeholder {
  color: #777;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 5px;
}

.product-tag {
  position: absolute;
  top: 17px;
  left: 17px;
  background: white;
  color: black;
  padding: 7px 10px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
}

.product-info {
  padding: 24px;
}

.product-info h3 {
  font-size: 19px;
  margin-bottom: 7px;
}

.product-description {
  color: #999;
  font-size: 13px;
  margin-bottom: 20px;
}

.product-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.product-options label {
  display: block;
  color: #999;
  font-size: 10px;
  letter-spacing: 1px;
  margin-bottom: 7px;
}

.product-options select {
  width: 100%;
  background: #202020;
  border: 1px solid #444;
  color: white;
  padding: 11px 8px;
  border-radius: 0;
  outline: none;
}

.product-options select:focus {
  border-color: white;
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.product-price {
  font-size: 20px;
  font-weight: 800;
}

.add-button {
  border: 0;
  background: white;
  color: black;
  padding: 13px 19px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}

.add-button:hover {
  background: #ccc;
}

/* ABOUT */

.about-section {
  padding: 100px 8%;
  text-align: center;
  background: #111;
}

.about-section h2 {
  font-size: clamp(28px, 5vw, 45px);
  margin-bottom: 20px;
}

.about-section p:last-child {
  max-width: 620px;
  margin: auto;
  color: #999;
  font-size: 15px;
  line-height: 1.9;
}

/* FOOTER */

footer {
  background: #080808;
  padding: 65px 8% 25px;
  border-top: 1px solid #252525;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 35px;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

.footer-description {
  color: #777;
  font-size: 10px;
  letter-spacing: 2px;
  margin-top: 12px;
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links h3,
.footer-contact h3 {
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.footer-links a,
.footer-contact a {
  color: #999;
  font-size: 13px;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid #252525;
  padding-top: 22px;
  color: #666;
  font-size: 10px;
  letter-spacing: 1px;
}

/* CART */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .75);
  opacity: 0;
  visibility: hidden;
  transition: .25s;
  z-index: 100;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

.cart-drawer {
  position: fixed;
  z-index: 101;
  top: 0;
  right: -450px;
  width: min(420px, 100%);
  height: 100vh;
  background: #111;
  padding: 25px;
  display: flex;
  flex-direction: column;
  transition: right .3s ease;
}

.cart-drawer.active {
  right: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 20px;
}

.cart-header h2 {
  font-size: 19px;
  letter-spacing: 2px;
}

.cart-header button {
  background: none;
  color: white;
  border: 0;
  font-size: 30px;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
}

.empty-cart {
  color: #888;
  font-size: 14px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #333;
}

.cart-item h4 {
  font-size: 14px;
}

.cart-item p {
  color: #999;
  font-size: 12px;
  margin-top: 5px;
}

.cart-item-right {
  text-align: right;
}

.remove-item {
  background: none;
  border: 0;
  color: #aaa;
  font-size: 12px;
  margin-top: 8px;
}

.cart-footer {
  border-top: 1px solid #333;
  padding-top: 20px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}

.checkout-button,
.continue-shopping {
  width: 100%;
  border: 0;
  padding: 15px;
  margin-top: 10px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.checkout-button {
  background: white;
  color: black;
}

.continue-shopping {
  background: #252525;
  color: white;
}

.checkout-note {
  color: #777;
  font-size: 10px;
  text-align: center;
  margin-top: 13px;
}

/* TOAST */

.toast {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 100px);
  opacity: 0;
  background: white;
  color: black;
  padding: 13px 22px;
  font-size: 13px;
  z-index: 150;
  transition: .3s;
}

.toast.active {
  transform: translate(-50%, 0);
  opacity: 1;
}

/* MOBILE */

@media (max-width: 700px) {
  .navbar {
    height: auto;
    min-height: 75px;
    padding: 16px 5%;
    flex-wrap: wrap;
    gap: 15px;
  }

  .logo {
    font-size: 21px;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }

  .nav-links a {
    font-size: 12px;
  }

  .hero {
    min-height: 470px;
    padding: 75px 7%;
  }

  .hero h1 {
    letter-spacing: -2px;
  }

  .hero-side-text {
    display: none;
  }

  .shop-section {
    padding: 70px 5%;
  }

  .section-heading h2 {
    font-size: 27px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 280px;
  }

  .about-section {
    padding: 75px 7%;
  }

  footer {
    padding: 50px 7% 25px;
  }

  .footer-main {
    flex-direction: column;
  }
}
