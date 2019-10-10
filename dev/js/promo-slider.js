var promoSLiderExists = document.getElementById("promoSlider");

if (promoSLiderExists) {
  var slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("promo-slider__list-item");
    var dots = document.getElementsByClassName("promo-slider__toggle");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" promo-slider__toggle--active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " promo-slider__toggle--active";
  }
}


