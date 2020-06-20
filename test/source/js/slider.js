var slides = document.querySelectorAll(".slider__item");
var dots = document.querySelectorAll(".slider__toggle");
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider__item--active");
      slides[i].classList.add("slider__item--hide");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider__toggle--active", "");
  }
  slides[slideIndex-1].classList.remove("slider__item--hide");
  slides[slideIndex-1].classList.add("slider__item--active");
  dots[slideIndex-1].className += " slider__toggle--active";
}

dots[0].addEventListener('click', function () {
  currentSlide(1);
});
dots[1].addEventListener('click', function () {
  currentSlide(2);
});
dots[2].addEventListener('click', function () {
  currentSlide(3);
});
