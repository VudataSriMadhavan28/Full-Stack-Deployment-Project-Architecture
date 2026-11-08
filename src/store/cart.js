import { getProduct } from "../data/products.js";

const KEY = "loom-cart";
let items = {};
const listeners = new Set();

try { items = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { items = {}; }

const commit = () => {
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  listeners.forEach((fn) => fn());
};

export const cart = {
  items: () => Object.entries(items).map(([id, qty]) => ({ product: getProduct(id), qty })),
  add(id) { items[id] = (items[id] || 0) + 1; commit(); },
  remove(id) { items[id] > 1 ? items[id]-- : delete items[id]; commit(); },
  clear() { items = {}; commit(); },
  count: () => Object.values(items).reduce((a, b) => a + b, 0),
  total: () => cart.items().reduce((s, { product, qty }) => s + product.price * qty, 0),
  subscribe(fn) { listeners.add(fn); },
};
