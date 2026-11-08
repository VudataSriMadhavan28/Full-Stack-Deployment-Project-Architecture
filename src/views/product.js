import { getProduct } from "../data/products.js";
import { money, gradient, esc } from "../utils.js";
import { notFoundView } from "./misc.js";

export function productView(id) {
  const p = getProduct(id);
  if (!p) return notFoundView();
  return `
    <p><a href="/" data-link>← Back to catalog</a></p>
    <div class="detail">
      <div class="thumb" style="${gradient(p.hue)}" role="img" aria-label="${esc(p.name)}">${p.emoji}</div>
      <div>
        <span class="cat">${p.cat}</span><h1>${esc(p.name)}</h1>
        <p class="price big">${money(p.price)}</p><p>${esc(p.desc)}</p>
        <button class="primary" data-add="${p.id}">Add to cart</button>
      </div>
    </div>`;
}
