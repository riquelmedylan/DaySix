const div = document.querySelectorAll("div");
const body = document.querySelector("body");

div.forEach((container) => {
  if (!container.classList.contains("move")) {
    if (window.screen.availHeight - 200 > container.offsetTop) {
      container.classList.add("move");
    }
  }
});
console.log(window)
addEventListener("scroll", (e) => {
  let window = Math.floor(e.path[1].scrollY);
  div.forEach((container) => {
    if (!container.classList.contains("move")) {
      if (window > container.offsetTop - 400) {
        container.classList.add("move");
      }
    }
  });
});
