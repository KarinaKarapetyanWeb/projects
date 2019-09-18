// autoMainSlider();
var mainToggle1 = document.querySelector('.slider__toggle-1');
var mainToggle2 = document.querySelector('.slider__toggle-2');
var mainToggle3 = document.querySelector('.slider__toggle-3');
var mainSlider = document.querySelector('.page-main-slider .slider__list');
var mainSize = window.innerWidth;

// function autoMainSlider () {
// 	for (var i = 1 ; i <= 3; i++) {
// 		timer = setTimeout(sliderScroll, 1000);
// 	}
// }

// function sliderScroll () {
// 	mainSlider.style.transform = 'translateX(' + (-mainSize) + 'px)';
// 	autoMainSlider();
// }

mainToggle1.addEventListener('click', function() {
	if (mainToggle2.classList.contains ('slider__toggle--active')) {
		mainSlider.style.transform = 'translateX(' + (0) + 'px)';
		mainToggle2.classList.remove ('slider__toggle--active');
		mainToggle1.classList.add ('slider__toggle--active');
	}
	else if (mainToggle3.classList.contains ('slider__toggle--active')) {
		mainSlider.style.transform = 'translateX(' + (0) + 'px)';
		mainToggle3.classList.remove ('slider__toggle--active');
		mainToggle1.classList.add ('slider__toggle--active');
	}
});

mainToggle2.addEventListener('click', function() {
	if (mainToggle1.classList.contains ('slider__toggle--active')) {
		mainSlider.style.transform = 'translateX(' + (-mainSize) + 'px)';
		mainToggle1.classList.remove ('slider__toggle--active');
		mainToggle2.classList.add ('slider__toggle--active');
	} else if (mainToggle3.classList.contains ('slider__toggle--active')) {
		mainSlider.style.transform = 'translateX(' + (-mainSize) + 'px)';
		mainToggle3.classList.remove ('slider__toggle--active');
		mainToggle2.classList.add ('slider__toggle--active');
	}
});

mainToggle3.addEventListener('click', function() {
	if (mainToggle1.classList.contains ('slider__toggle--active')) {
		mainSlider.style.transform = 'translateX(' + (-mainSize*2) + 'px)';
		mainToggle1.classList.remove ('slider__toggle--active');
		mainToggle3.classList.add ('slider__toggle--active');
	} 
	else if (mainToggle2.classList.contains ('slider__toggle--active')) {
		mainSlider.style.transform = 'translateX(' + (-mainSize*2) + 'px)';
		mainToggle2.classList.remove ('slider__toggle--active');
		mainToggle3.classList.add ('slider__toggle--active');
	}
});