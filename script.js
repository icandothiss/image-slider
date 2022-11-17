const next = document.getElementById("next");
const prev = document.getElementById("prev");
const container = document.getElementById("slider");
const elements = document.querySelectorAll(".slide");
const contents = document.querySelectorAll(".content");
let count = 0;

next.addEventListener("click", nextPage);
prev.addEventListener("click", prevPage);

function nextPage() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("hidden");
  }
  count++;
  if (count === elements.length) {
    count = 0;
  }
  setTimeout(() => elements[count].classList.remove("hidden"));

  contents[count].classList.add("animate-content");
}

function prevPage() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("hidden");
  }
  if (count === 0) {
    count = elements.length;
  }
  count--;
  setTimeout(() => elements[count].classList.remove("hidden"));
}
