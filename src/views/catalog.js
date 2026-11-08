import { PRODUCTS } from "../data/products.js";
import { money, gradient, esc } from "../utils.js";

export const filters = { q: "", cat: "All", sort: "featured" };

const sorters = {
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
};

export function catalogView() {
  const cats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
  const opt = (v, label, cur) => `<option value="${v}" ${v === cur ? "selected" : ""}>${label}</option>`;
  return `
    <h1>The Catalog</h1><p class="sub">Everyday objects, made to last.</p>
    <div class="toolbar">
      <input id="q" type="search" placeholder="Search products…" value="${esc(filters.q)}" aria-label="Search">
      <select id="cat" aria-label="Category">${cats.map((c) => opt(c, c, filters.cat)).join("")}</select>
      <select id="sort" aria-label="Sort">
        ${opt("featured", "Featured", filters.sort)}${opt("low", "Price: low to high", filters.sort)}
        ${opt("high", "Price: high to low", filters.sort)}${opt("name", "Name A–Z", filters.sort)}
      </select>
    </div>
    <div class="grid" id="grid">${gridHtml()}</div>`;
}

export function gridHtml() {
  const list = PRODUCTS.filter(
    (p) => (filters.cat === "All" || p.cat === filters.cat) && p.name.toLowerCase().includes(filters.q.toLowerCase())
  );
  if (sorters[filters.sort]) list.sort(sorters[filters.sort]);
  if (!list.length) return `<p class="empty">No products match your search.</p>`;
  return list.map((p) => `
    <article class="card">
      <a href="/product/${p.id}" data-link><div class="thumb" style="${gradient(p.hue)}" role="img" aria-label="${esc(p.name)}">${p.emoji}</div></a>
      <div class="body">
        <span class="cat">${p.cat}</span>
        <a href="/product/${p.id}" data-link><strong>${esc(p.name)}</strong></a>
        <div class="row"><span class="price">${money(p.price)}</span><button class="primary" data-add="${p.id}">Add</button></div>
      </div>
    </article>`).join("");
}
