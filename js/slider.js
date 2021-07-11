// SLIDER VARIABLES
const sliderItems = document.querySelectorAll('.slider__items--item');

// LOAD ANIMATION FOR SLIDER ITEM
document.addEventListener('DOMContentLoaded', () => {
  sliderItems[0].classList.add('show');
  const sliderChildren = sliderItems[0].children[0];

  setTimeout(() => {
    sliderChildren.children[0].classList.add('visible');
  }, 100);
  setTimeout(() => {
    sliderChildren.children[1].classList.add('visible');
  }, 200);
  setTimeout(() => {
    sliderChildren.children[2].classList.add('visible');
  }, 300);
  setTimeout(() => {
    sliderChildren.children[3].classList.add('visible');
  }, 500);
})