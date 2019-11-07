var prevBtnDoc = document.querySelector('.slider-doc-btn--left');
var nextBtnDoc = document.querySelector('.slider-doc-btn--right');
var sliderDoc = document.querySelector('.documentation-slider__list');
var counterDoc = 0;

if (sliderDoc) {
	var sliderItemsDoc = sliderDoc.children;

	if (window.innerWidth >= 1200) {
		var numberDoc = 4;
		var sizeDoc = 260;
	} else if (window.innerWidth >= 768) {
		var numberDoc = 2;
		var sizeDoc = 260;
	} else {
		var numberDoc = 1;
		var sizeDoc = 222;
	}

	if (sliderItemsDoc.length > numberDoc) {
		nextBtnDoc.addEventListener ('click', sliderRightDoc);
		prevBtnDoc.addEventListener ('click', sliderLeftDoc);
	} else {
		nextBtnDoc.classList.add('disabled');
	} 

	if (sliderItemsDoc.length === 1) {
		sliderItemsDoc[0].style.margin = '0 auto';
	} else if (sliderItemsDoc.length === 2 && window.innerWidth >= 1200) {
		sliderDoc.style.width = '470px';
	} else if (sliderItemsDoc.length === 3 && window.innerWidth >= 1200) {
		sliderDoc.style.width = '740px';
	}

	function sliderRightDoc() {
		counterDoc++;
		sliderDoc.style.transform = 'translateX(' + (-sizeDoc*counterDoc) + 'px)';
		if (counterDoc > 0) {
			prevBtnDoc.classList.remove('disabled');
		}
		if (counterDoc <= 0) {
			prevBtnDoc.classList.add('disabled');
			sliderDoc.style.transform = "none";
		}
		if (counterDoc >= sliderItemsDoc.length - numberDoc) {
			nextBtnDoc.classList.add('disabled');
			counterDoc = sliderItemsDoc.length - numberDoc;
			sliderDoc.style.transform = 'translateX(' + (-sizeDoc*counterDoc) + 'px)';
		}
	}

	function sliderLeftDoc() {
		counterDoc--;
		sliderDoc.style.transform = 'translateX(' + (-sizeDoc*counterDoc) + 'px)';

		if (0 < counterDoc < sliderItemsDoc.length - numberDoc) {
			nextBtnDoc.classList.remove('disabled');
			sliderDoc.style.transform = 'translateX(' + (-sizeDoc*counterDoc) + 'px)';
		}
		if (counterDoc <= 0) {
			prevBtnDoc.classList.add('disabled');
			sliderDoc.style.transform = "none";
		}
	}
}