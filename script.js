const slides = document.querySelectorAll(".slide");
var counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const next = () => {
  if (counter === 5) {
    return; // Do nothing if the counter is at the 5th slide
  }

  counter++;
  if (counter === totalSlides) {
    counter = 0; // Loop back to the first slide
  }

  slideImage();
};

const prev = () => {
  if (counter === 0) {
    return;
  }
  counter--;
  if (counter < 0) {
    counter = totalSlides - 1;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// run next function after every 3000s
setInterval(next, 3000);
