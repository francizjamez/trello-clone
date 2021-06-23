const boxEl = document.getElementById("context-box");
const body = document.querySelector("body");
console.log(boxEl);

boxEl.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  e.stopPropagation();
  let customMenu = createCustomMenu();
  customMenu.style.left = e.x + "px";
  customMenu.style.top = e.y + "px";
  const prevChild = boxEl.querySelector("div");
  if (prevChild) boxEl.removeChild(prevChild);
  boxEl.appendChild(customMenu);
});

body.addEventListener("click", (e) => {
  const prevChild = boxEl.querySelector("div");
  if (prevChild) boxEl.removeChild(prevChild);
});

body.addEventListener("contextmenu", (e) => {
  const prevChild = boxEl.querySelector("div");
  if (prevChild) boxEl.removeChild(prevChild);
});

function createCustomMenu() {
  const container = document.createElement("div");
  console.log(container);
  ["Donate", "Share", "Heehee"].forEach((el) => {
    const option = document.createElement("button");
    option.className = "border border-black p-2 hover:bg-gray-200";
    option.innerHTML = el;
    container.appendChild(option);
  });

  container.className =
    "border border-black fixed flex flex-col bg-white rounded";

  return container;
}
