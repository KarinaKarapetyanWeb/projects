var prev = document.getElementById('slider-left-catalog');
var next = document.getElementById('slider-right-catalog');

next.addEventListener ('click', sliderRight);

var right = 0;

var step = 280;

function sliderRight() {
	var sliderId = document.getElementById('sliderIdCatalog');
	right = right + step;
	if (right > 1960) {
		next.classList.add('disabled');
		right = 0;
	}
	sliderId.style.right = right +'px';
}
