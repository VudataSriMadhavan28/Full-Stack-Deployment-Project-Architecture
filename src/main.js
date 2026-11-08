import "./styles.css";
import { cart } from "./store/cart.js";
import { initRouter, render } from "./router.js";
import { filters, gridHtml } from "./views/catalog.js";
import { toast } from "./utils.js";

const badge = document.getElementById("count");
const syncBadge = () => (badge.textContent = cart.count());
cart.subscribe(syncBadge);
syncBadge();

const refreshGrid = () => {
  const g = document.getElementById("grid");
  if (g) g.innerHTML = gridHtml();
};

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-add],[data-dec],[data-checkout]");
  if (!t) return;
  if (t.dataset.add) {
    cart.add(t.dataset.add);
    toast("Added to cart");
    if (location.pathname.startsWith("/cart")) render();
  } else if (t.dataset.dec) {
    cart.remove(t.dataset.dec);
    render();
  } else {
    cart.clear();
    toast("Demo order placed. Thank you!");
    render();
  }
});

document.addEventListener("input", (e) => {
  if (e.target.id === "q") { filters.q = e.target.value; refreshGrid(); }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "cat") { filters.cat = e.target.value; refreshGrid(); }
  if (e.target.id === "sort") { filters.sort = e.target.value; refreshGrid(); }
});

initRouter();
