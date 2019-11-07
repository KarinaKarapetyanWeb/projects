var descSliderExists = document.getElementById("desc-slider");

if (descSliderExists) {
  var slideIndexDesc = 1;
  showSlidesDesc(slideIndexDesc);

  function currentSlideDesc(n) {
    showSlidesDesc(slideIndexDesc = n);
  }

  function showSlidesDesc(n) {
    var i;
    var slides = document.getElementsByClassName("description-slider__item");
    var dots = document.getElementsByClassName("description-slider__toggle");
    if (n > slides.length) {slideIndexDesc = 1} 
    if (n < 1) {slideIndexDesc = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" description-slider__toggle--active", "");
    }
    slides[slideIndexDesc-1].style.display = "block"; 
    dots[slideIndexDesc-1].className += " description-slider__toggle--active";
  }

}