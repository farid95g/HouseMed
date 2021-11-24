// slider variables
const sliderItems = document.querySelectorAll('.slider__items--item');
const sliderButtons = document.querySelectorAll('.slider__btn button');

// load animation for slider item
document.addEventListener('DOMContentLoaded', () => {
  sliderItems[0].classList.add('show');
  const sliderChildren = sliderItems[0].children[0];

  animateSliderItem(null, sliderChildren.children);
});

// slider item elements animation function
function animateSliderItem(prevItems, currItems) {
  if (prevItems) {
    [...prevItems].forEach(item => {
      item.classList.remove('visible');
    });
  }
  
  [...currItems].forEach((item, i) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, (i + 1) * 100);
  });
}

// change slider item on button clicks
sliderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentIndex = [...sliderItems].indexOf(document.querySelector('.slider__items--item.show'));

    if (button.parentElement.classList.value.includes('right')) {
      sliderItems[currentIndex].classList.remove('show');
      sliderItems[currentIndex + 1].classList.add('show');

      const sliderChildren = sliderItems[currentIndex + 1].children[0];

      animateSliderItem(sliderItems[currentIndex].children[0].children, sliderChildren.children);
    } else {
      sliderItems[currentIndex].classList.remove('show');
      sliderItems[currentIndex - 1].classList.add('show');

      const sliderChildren = sliderItems[currentIndex - 1].children[0];

      animateSliderItem(sliderItems[currentIndex].children[0].children, sliderChildren.children);
    }
  })
})