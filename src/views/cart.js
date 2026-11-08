import { cart } from "../store/cart.js";
import { money, gradient, esc } from "../utils.js";

export function cartView() {
  const lines = cart.items();
  if (!lines.length) return `<h1>Your cart</h1><p class="empty">Your cart is empty. <a href="/" data-link>Browse the catalog</a></p>`;
  return `<h1>Your cart</h1>
    ${lines.map(({ product: p, qty }) => `
      <div class="cart-line">
        <div class="mini" style="${gradient(p.hue)}">${p.emoji}</div>
        <div class="grow"><a href="/product/${p.id}" data-link>${esc(p.name)}</a><div class="cat">${money(p.price)} each</div></div>
        <button data-dec="${p.id}" aria-label="Decrease quantity">−</button><span>${qty}</span>
        <button data-add="${p.id}" aria-label="Increase quantity">+</button>
        <strong class="line-total">${money(p.price * qty)}</strong>
      </div>`).join("")}
    <div class="total">Total: ${money(cart.total())}</div>
    <p class="right"><button class="primary" data-checkout>Checkout (demo)</button></p>`;
}
