var slideIndexGallery = 1;
showSlidesGallery(slideIndexGallery);

function currentSlideGallery(n) {
  showSlidesGallery(slideIndexGallery = n);
}

function showSlidesGallery(n) {
  var i;
  var slides = document.getElementsByClassName("item-slider__list-item");
  var dots = document.getElementsByClassName("item-slider__toggle");
  if (n > slides.length) {slideIndexGallery = 1} 
  if (n < 1) {slideIndexGallery = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" item-slider__toggle--active", "");
  }
  slides[slideIndexGallery-1].style.display = "block"; 
  dots[slideIndexGallery-1].className += " item-slider__toggle--active";
}
