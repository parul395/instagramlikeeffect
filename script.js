const img = document.querySelector("img");
const icon = document.querySelector(".icon");
const countEl = document.querySelector("span");
let count = 0;
img.addEventListener("dblclick", () => {
  count++;
  icon.classList.add("like");
  countEl.innerHTML = count;
  setTimeout(() => {
    icon.classList.remove("like");
  }, 1200);
});