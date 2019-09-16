autoSlider();
var prevBtn = document.querySelector('.manufacturers-slider__btn--left');
var nextBtn = document.querySelector('.manufacturers-slider__btn--right');
var slider = document.querySelector('.manufacturers-slider__list');
var sliderItems = document.querySelectorAll('.manufacturers-slider__list-item');
var timer;
var counter = 0;
var size = 200;
if (window.innerWidth >= 1200) {
	var number = 5;
} else if (window.innerWidth >= 768) {
	var number = 3;
} else {
	var number = 1;
}

// nextBtn.addEventListener ('click', sliderRight);
// prevBtn.addEventListener ('click', sliderLeft);

function autoSlider() {
	timer = setTimeout(sliderMove, 2000);
}

function sliderMove() {
	counter++;
	slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
	if (counter > 0) {
		prevBtn.classList.remove('disabled');
	}
	if (counter <= 0) {
		prevBtn.classList.add('disabled');
		slider.style.transform = "none";
	}
	if (counter >= sliderItems.length - number) {
		nextBtn.classList.add('disabled');
		counter = sliderItems.length - number;
		slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
	}
	autoSlider();
}

function sliderRight() {
	counter++;
	slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
	if (counter > 0) {
		prevBtn.classList.remove('disabled');
	}
	if (counter <= 0) {
		prevBtn.classList.add('disabled');
		slider.style.transform = "none";
	}
	if (counter >= sliderItems.length - number) {
		nextBtn.classList.add('disabled');
		counter = sliderItems.length - number;
		slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
	}
}

function sliderLeft() {
	counter--;
	slider.style.transform = 'translateX(' + (-size*counter) + 'px)';

	if (0 < counter < sliderItems.length - 2) {
		nextBtn.classList.remove('disabled');
		slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
	}
	if (counter <= 0) {
		prevBtn.classList.add('disabled');
		slider.style.transform = "none";
	}
}

nextBtn.addEventLis('click', getActionOnClick(sliderRight))
prevBtn.addEventLis('click', getActionOnClick(sliderLeft))

const getActionOnClick = (sliderMove) => () => {
clearTimeout(timer)
sliderRight();
}
