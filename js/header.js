const links = document.querySelectorAll(".navbar__left--item");
const active = document.querySelector(".navbar__left--active");
const width = active.clientWidth;
const left = active.offsetLeft;

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const span = link.querySelector("span");
    const style = `
      width: ${span.clientWidth + 14}px;
      left: ${link.offsetLeft + ((link.clientWidth - (span.clientWidth + 14)) / 2)}px;
    `;
    active.setAttribute("style", style);
  });
  link.addEventListener("mouseleave", () => {
    const style = `
      width: ${width}px;
      left: ${left}px;
    `;
    active.setAttribute("style", style);
  });
});