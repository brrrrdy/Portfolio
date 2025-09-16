import "./styles.css";

document.body.innerHTML = "";

// Header
const header = document.createElement("header");
header.className = "w-full bg-blue-600 text-white py-6 mb-8 shadow";
const h1 = document.createElement("h1");
h1.className = "text-3xl font-bold text-center";
h1.textContent = "My Portfolio Header";
header.appendChild(h1);
document.body.appendChild(header);

// Main grid
const grid = document.createElement("div");
grid.className = "grid grid-cols-3 gap-4 p-8";
for (let i = 1; i <= 6; i++) {
  const item = document.createElement("div");
  item.className = "bg-blue-200 text-center p-6 rounded shadow";
  item.textContent = `Item ${i}`;
  grid.appendChild(item);
}
document.body.appendChild(grid);

// Footer
const footer = document.createElement("footer");
footer.className = "w-full bg-gray-800 text-white py-4 mt-8 text-center";
footer.textContent = "© 2025 My Portfolio";
document.body.appendChild(footer);
document.body.appendChild(container);
document.body.prepend(header);
container.className = "grid grid-cols-3 gap-4 p-8";

for (let i = 1; i <= 6; i++) {
  const item = document.createElement("div");
  item.className = "bg-blue-200 text-center p-6 rounded shadow";
  container.appendChild(item);
}
document.body.appendChild(container);
document.body.prepend(header);
