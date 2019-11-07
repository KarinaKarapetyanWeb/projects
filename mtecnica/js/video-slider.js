var prevBtnVideo = document.querySelector('.slider-video-btn--left');
var nextBtnVideo = document.querySelector('.slider-video-btn--right');
var sliderVideo = document.querySelector('.video__list');
var counterVideo = 0;

if (sliderVideo) {
	var sliderItemsVideo = sliderVideo.children;
	
	if (window.innerWidth >= 1200) {
		var numberVideo = 2;
		var sizeVideo = 525;
	} else if (window.innerWidth >= 768) {
		var numberVideo = 1;
		var sizeVideo = 495;
	} else {
		var numberVideo = 1;
		var sizeVideo = 285;
	}

	if (sliderItemsVideo.length > numberVideo) {
		nextBtnVideo.addEventListener ('click', sliderRightVideo);
		prevBtnVideo.addEventListener ('click', sliderLeftVideo);
	} else {
		nextBtnVideo.classList.add('disabled');
	} 

	if (sliderItemsVideo.length === 1) {
		sliderItemsVideo[0].style.margin = '0 auto';
	}

	function sliderRightVideo() {
		counterVideo++;
		sliderVideo.style.transform = 'translateX(' + (-sizeVideo*counterVideo) + 'px)';
		if (counterVideo > 0) {
			prevBtnVideo.classList.remove('disabled');
		}
		if (counterVideo <= 0) {
			prevBtnVideo.classList.add('disabled');
			sliderVideo.style.transform = "none";
		}
		if (counterVideo >= sliderItemsVideo.length - numberVideo) {
			nextBtnVideo.classList.add('disabled');
			counterVideo = sliderItemsVideo.length - numberVideo;
			sliderVideo.style.transform = 'translateX(' + (-sizeVideo*counterVideo) + 'px)';
		}
	}

	function sliderLeftVideo() {
		counterVideo--;
		sliderVideo.style.transform = 'translateX(' + (-sizeVideo*counterVideo) + 'px)';

		if (0 < counterVideo < sliderItemsVideo.length - numberVideo) {
			nextBtnVideo.classList.remove('disabled');
			sliderVideo.style.transform = 'translateX(' + (-sizeVideo*counterVideo) + 'px)';
		}
		if (counterVideo <= 0) {
			prevBtnVideo.classList.add('disabled');
			sliderVideo.style.transform = "none";
		}
	}
}