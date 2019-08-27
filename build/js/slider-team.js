var prev = document.getElementById('slider-left');
var next = document.getElementById('slider-right');

// next.onclick = sliderRight;
next.addEventListener ('click', sliderRight);
// prev.addEventListener ('click', sliderLeft);
var right = 0;
// var left = 0;
var step = 280;

function sliderRight() {
	var sliderId = document.getElementById('sliderId');
	right = right + step;
	if (right > 1960) {
		next.classList.add('disabled');
		right = 0;
	}
	sliderId.style.right = right +'px';
}

// function sliderLeft() {
// 	var sliderId = document.getElementById('sliderId');
// 	left = right - step;
// 	if (left < -1960) {
// 		next.classList.add('disabled');
// 		left = -1960;
// 	}
// 	sliderId.style.left = left +'px';
// }
