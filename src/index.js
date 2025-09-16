import "./styles.css";

document.body.innerHTML = "";

// div with Tailwind classes
const container = document.createElement("div");
container.className = "grid grid-cols-3 gap-4 p-8";

for (let i = 1; i <= 6; i++) {
  const item = document.createElement("div");
  item.className = "bg-blue-200 text-center p-6 rounded shadow";
  container.appendChild(item);
}

const header = document.createElement("header");
header.className = "w-full bg-blue-600 text-white py-6 mb-8 shadow";
header.innerHTML =
  '<h1 class="text-3xl font-bold text-center">My Portfolio Header</h1>';

document.body.appendChild(container);
document.body.prepend(header);
