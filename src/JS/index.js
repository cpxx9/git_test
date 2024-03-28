import '../CSS/styles.css';
const buttons = document.querySelectorAll('[data-carouselBtn]');
const slider = document.querySelector('[data-slider]');
const imageSlides = document.querySelectorAll('.slide');
console.log(imageSlides);

for (let i = 0; i < imageSlides.length; i++) {
  const slideBtn = document.createElement('input');
  slideBtn.type = 'radio';
  slideBtn.name = 'radio-btn';
  slideBtn.id = `radio${i + 1}`;
  slideBtn.dataset.sliderBtn = true;
  slider.appendChild(slideBtn);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselBtn === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');
    const sliderBtns = document.querySelectorAll('[data-sliderBtn]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    console.log(newIndex);
    console.log(sliderBtns);
    sliderBtns[newIndex].checked = true;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
