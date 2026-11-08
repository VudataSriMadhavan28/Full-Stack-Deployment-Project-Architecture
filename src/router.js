import { catalogView } from "./views/catalog.js";
import { productView } from "./views/product.js";
import { cartView } from "./views/cart.js";
import { aboutView, notFoundView } from "./views/misc.js";

const routes = [
  { pattern: /^\/$/, name: "catalog", title: "Catalog", view: catalogView },
  { pattern: /^\/about\/?$/, name: "about", title: "About", view: aboutView },
  { pattern: /^\/cart\/?$/, name: "cart", title: "Cart", view: cartView },
  { pattern: /^\/product\/(\d+)\/?$/, name: "catalog", title: "Product", view: (id) => productView(id) },
];

export function render() {
  const app = document.getElementById("app");
  const path = location.pathname;
  let matched = null, args = [];
  for (const r of routes) {
    const m = path.match(r.pattern);
    if (m) { matched = r; args = m.slice(1); break; }
  }
  app.innerHTML = matched ? matched.view(...args) : notFoundView();
  document.title = (matched ? matched.title : "Not found") + " – Loom & Lathe";
  document.querySelectorAll("nav [data-r]").forEach((a) =>
    a.classList.toggle("active", !!matched && a.dataset.r === matched.name));
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

export function navigate(url) {
  history.pushState({}, "", url);
  render();
}

export function initRouter() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-link]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(a.getAttribute("href"));
  });
  window.addEventListener("popstate", render);
  render();
}
