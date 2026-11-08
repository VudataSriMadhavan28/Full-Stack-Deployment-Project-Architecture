export const PRODUCTS = [
  { id: 1, name: "Walnut Desk Organizer", cat: "Office", price: 48, emoji: "🗄️", hue: 28, desc: "Hand-finished walnut with three compartments for pens, cards and a phone." },
  { id: 2, name: "Ceramic Pour-Over Set", cat: "Kitchen", price: 62, emoji: "☕", hue: 200, desc: "Matte-glazed dripper and carafe. Brews two clear, bright cups." },
  { id: 3, name: "Linen Throw Blanket", cat: "Home", price: 89, emoji: "🛋️", hue: 40, desc: "Stonewashed European linen that softens with every wash." },
  { id: 4, name: "Brass Desk Lamp", cat: "Office", price: 120, emoji: "💡", hue: 45, desc: "Adjustable arm, warm 2700K LED, solid brass base." },
  { id: 5, name: "Cast Iron Skillet", cat: "Kitchen", price: 55, emoji: "🍳", hue: 0, desc: "Pre-seasoned 10-inch skillet that goes from stove to oven to table." },
  { id: 6, name: "Terrazzo Coasters (4)", cat: "Home", price: 28, emoji: "🪨", hue: 330, desc: "Set of four cement coasters with a cork underside." },
  { id: 7, name: "Leather Notebook Cover", cat: "Office", price: 44, emoji: "📓", hue: 20, desc: "Vegetable-tanned leather that fits A5 notebooks." },
  { id: 8, name: "Beeswax Candle Trio", cat: "Home", price: 32, emoji: "🕯️", hue: 50, desc: "Three hand-poured candles with a faint honey scent." },
  { id: 9, name: "Carbon Steel Knife", cat: "Kitchen", price: 78, emoji: "🔪", hue: 215, desc: "Eight-inch chef’s knife with a walnut handle." },
  { id: 10, name: "Wool Desk Mat", cat: "Office", price: 36, emoji: "🖱️", hue: 160, desc: "Felted wool mat, 80 × 40 cm, with a non-slip base." },
  { id: 11, name: "Stoneware Mug Pair", cat: "Kitchen", price: 30, emoji: "🍵", hue: 270, desc: "Two 350 ml mugs in speckled stoneware." },
  { id: 12, name: "Rattan Plant Basket", cat: "Home", price: 41, emoji: "🪴", hue: 95, desc: "Woven basket with a removable liner for pots up to 22 cm." },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === Number(id));
