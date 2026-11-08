export const money = (n) => "$" + n.toFixed(2);
export const gradient = (h) =>
  `background:linear-gradient(135deg,hsl(${h} 60% 85%),hsl(${h} 55% 70%))`;
export const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

let timer;
export function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(timer);
  timer = setTimeout(() => t.classList.remove("show"), 1400);
}
