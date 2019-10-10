autoMainSlider();
var slideIndex = 1;
showSlides(slideIndex);
var timer;

function autoMainSlider() {
	timer = setTimeout(function () {
	  var i;
	  var slides = document.getElementsByClassName("slider__list-item");
	  var dots = document.getElementsByClassName("slider__toggle");
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none"; 
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1}
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" slider__toggle--active", "");
	  }
	  slides[slideIndex-1].style.display = "block"; 
	  dots[slideIndex-1].className += " slider__toggle--active";

		autoMainSlider();
		}, 20000);
}

function currentSlide(n) {
	clearTimeout (timer);
  	showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__list-item");
  var dots = document.getElementsByClassName("slider__toggle");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider__toggle--active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " slider__toggle--active";
}