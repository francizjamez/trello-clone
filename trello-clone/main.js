const containers = document.querySelectorAll(".container");

const firstCard = document.querySelector(".card");
const cards = document.querySelectorAll(".card");

let selected = null;
let insertBetween = false;

cards.forEach((card) => {
  card.addEventListener("dragstart", (e) => {
    e.target.classList.toggle("dragging");
    selected = card;
  });
  card.addEventListener("dragend", (e) => {
    e.target.classList.toggle("dragging");
  });
});

containers.forEach((cont) => {
  cont.addEventListener("dragover", (e) => {
    e.preventDefault();
    let children = cont.children;
    if (e.y > children[children.length - 1].offsetTop) {
      cont.appendChild(selected);
    } else {
      for (let i = 1; i < children.length; i++) {
        const child = children[i];
        if (e.y > child.offsetTop - 34  ) {
          cont.insertBefore(selected, child);
        }
      }
    }
  });
});
