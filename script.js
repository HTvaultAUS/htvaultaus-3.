@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
:root {
  --black: #111;
  --grey: #888;
  --light: #f3f3f3;
  --white: #fff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: 'DM Sans', sans-serif;
  color: var(--black);
  background: white;
}

button, a {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

/* NAVIGATION */

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 76px;
  padding: 0 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,.97);
  border-bottom: 1px solid #eee;
  backdrop-filter: blur(12px);
}

.logo {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 21px;
  letter-spacing: -1px;
  white-space: nowrap;
}

.logo span {
  color: var(--grey);
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 13px;
  font-weight: 700;
}

.nav-links a:hover {
  color: var(--grey);
}

.cart-button {
  background: var(--black);
  color: white;
  border: none;
  padding: 13px 20px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.cart-button:hover,
.checkout-button:hover,
.add-button:hover {
  background: #555;
}

/* HERO */

.hero {
  position: relative;
  min-height: 570px;
  padding: 95px 10%;
  display: flex;
  align-items: center;
  background: var(--black);
  color: white;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.eyebrow {
  color: var(--grey);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 19px;
}

.hero h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(58px, 9vw, 105px);
  line-height: .94;
  letter-spacing: -5px;
  font-weight: 900;
}

.hero h1 span {
  color: #888;
}

.hero-description {
  max-width: 390px;
  color: #bbb;
  font-size: 14px;
  line-height: 1.9;
  margin: 25px 0 32px;
}

.primary-button,
.dark-button {
  display: inline-block;
  background: white;
  color: black;
  padding: 16px 24px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.5px;
}

.primary-button:hover {
  background: #ccc;
}

.hero-decoration {
  position: absolute;
  right: 4%;
  bottom: -110px;
  color: rgba(255,255,255,.035);
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(250px, 42vw, 560px);
  font-weight: 900;
  pointer-events: none;
}

.hero-caption {
  position: absolute;
  right: 8%;
  top: 50%;
  writing-mode: vertical-rl;
  color: #888;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 4px;
}

/* SHOP */

.shop-section {
  padding: 95px 8%;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 40px;
}

.section-heading h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -2px;
}

.section-note {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--grey);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px 35px;
}

.product-card {
  min-width: 0;
  background: white;
}

.product-image {
  height: 350px;
  width: 100%;
  background: #eee;
  position: relative;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 15px;
  transition: transform .5s;
}

.product-card:hover .product-image img {
  transform: scale(1.04);
}

.product-tag {
  position: absolute;
  top: 15px;
  left: 15px;
  background: white;
  padding: 8px 12px;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}

.product-info {
  padding: 20px 0;
}

.product-info h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 9px;
}

.product-info p {
  color: #777;
  font-size: 13px;
  line-height: 1.7;
  min-height: 42px;
}

.product-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 18px;
}

.option-group label {
  display: block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 7px;
}

.option-group select {
  width: 100%;
  padding: 12px 9px;
  border: 1px solid #ddd;
  background: white;
  color: #111;
  font-size: 12px;
  border-radius: 0;
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
}

.product-price {
  font-size: 17px;
  font-weight: 800;
}

.add-button {
  border: none;
  background: var(--black);
  color: white;
  padding: 13px 17px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
}

/* ABOUT */

.about-section {
  padding: 90px 20px;
  background: var(--light);
  text-align: center;
}

.about-section h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(34px, 6vw, 60px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -2px;
}

.about-section h2 span {
  color: #888;
}

.about-section > p:not(.eyebrow) {
  max-width: 470px;
  margin: 22px auto 28px;
  color: #777;
  font-size: 14px;
  line-height: 1.8;
}

.dark-button {
  background: var(--black);
  color: white;
}

.dark-button:hover {
  background: #555;
}

/* FOOTER */

footer {
  background: var(--black);
  color: white;
  padding: 65px 8% 25px;
  scroll-margin-top: 76px;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.4fr;
  gap: 40px;
  padding-bottom: 55px;
}

.footer-logo {
  font-family: 'Montserrat', sans-serif;
  font-size: 27px;
  font-weight: 900;
}

.footer-tagline {
  color: #888;
  font-size: 10px;
  letter-spacing: 2px;
  margin-top: 12px;
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.footer-links h3,
.footer-contact h3 {
  font-size: 11px;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.footer-links a,
.contact-link {
  color: #bbb;
  font-size: 13px;
}

.footer-links a:hover,
.contact-link:hover {
  color: white;
}

.contact-label {
  font-size: 9px;
  font-weight: 800;
  color: #888;
  letter-spacing: 2px;
}

.copy-button {
  background: transparent;
  border: 1px solid #555;
  color: #bbb;
  padding: 7px 10px;
  font-size: 9px;
  letter-spacing: 1px;
  margin-top: -5px;
}

.copy-button:hover {
  border-color: white;
  color: white;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: #888;
  font-size: 9px;
  letter-spacing: 1.5px;
}

/* CART */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.55);
  z-index: 1998;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

.cart-drawer {
  position: fixed;
  z-index: 1999;
  top: 0;
  right: 0;
  width: min(440px, 100%);
  height: 100dvh;
  background: white;
  padding: 27px;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform .3s ease;
}

.cart-drawer.active {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.cart-header .eyebrow {
  margin-bottom: 5px;
}

.cart-header h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 21px;
  font-weight: 900;
}

.close-button {
  border: none;
  background: none;
  font-size: 32px;
  line-height: 1;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 15px 0;
}

.empty-cart {
  padding: 50px 5px;
  color: #888;
  text-align: center;
  font-size: 14px;
}

.cart-item {
  display: grid;
  grid-template-columns: 82px 1fr;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cart-item img {
  width: 82px;
  height: 90px;
  object-fit: contain;
  background: #eee;
}

.cart-item h3 {
  font-size: 13px;
  margin: 5px 0 8px;
}

.cart-item-price {
  font-size: 13px;
  font-weight: 800;
}

.cart-item-options {
  color: #777;
  font-size: 11px;
  line-height: 1.6;
  margin-top: 5px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
}

.quantity-controls button {
  width: 27px;
  height: 27px;
  border: 1px solid #ddd;
  background: white;
}

.quantity-controls .remove-button {
  width: auto;
  border: none;
  text-decoration: underline;
  color: #777;
  font-size: 11px;
  padding: 0 5px;
}

.cart-footer {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.total-row strong {
  font-size: 20px;
}

.cart-note {
  color: #888;
  font-size: 11px;
  line-height: 1.6;
  margin: 13px 0 17px;
}

.checkout-button {
  width: 100%;
  border: none;
  background: var(--black);
  color: white;
  padding: 17px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
}

.continue-shopping {
  width: 100%;
  background: none;
  border: none;
  padding: 14px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}

/* TOAST */

.toast {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 20px);
  background: #111;
  color: white;
  padding: 13px 20px;
  font-size: 12px;
  z-index: 3000;
  opacity: 0;
  visibility: hidden;
  transition: .25s;
  text-align: center;
  width: max-content;
  max-width: 90%;
}

.toast.active {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

/* MOBILE */

@media (max-width: 720px) {
  .navbar {
    min-height: 68px;
    padding: 12px 4%;
    flex-wrap: wrap;
    gap: 12px;
  }

  .logo {
    font-size: 15px;
  }

  .nav-links {
    gap: 12px;
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .nav-links a {
    font-size: 10px;
  }

  .cart-button {
    padding: 10px;
    font-size: 9px;
  }

  .hero {
    min-height: 490px;
    padding: 75px 7%;
  }

  .hero h1 {
    letter-spacing: -3px;
  }

  .hero-caption {
    display: none;
  }

  .shop-section {
    padding: 65px 6%;
  }

  .section-heading h2 {
    font-size: 30px;
  }

  .section-note {
    font-size: 8px;
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .product-image {
    height: 310px;
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .footer-contact {
    grid-column: 1 / -1;
  }
}

@media (max-width: 390px) {
  .navbar {
    padding: 12px 3%;
  }

  .logo {
    font-size: 13px;
  }

  .nav-links {
    gap: 8px;
  }

  .nav-links a {
    font-size: 9px;
  }

  .cart-button {
    padding: 9px 7px;
  }

  .product-options {
    grid-template-columns: 1fr;
  }

  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-contact {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: column;
  }
}


