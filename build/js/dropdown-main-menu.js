var mainItem = document.querySelectorAll('.main-list__item');

if (window.innerWidth >= 1200) {
	for (var i = 0 ; i < mainItem.length; i++) {
		if (mainItem[i].children.length > 1) {
			mainItem[i].addEventListener('mouseenter', function (evt) {
				this.querySelector('.main-list__item > .sub-menu').style.display = 'block';
			});
			mainItem[i].addEventListener('mouseleave', function (evt) {
				this.querySelector('.main-list__item > .sub-menu').style.display = 'none';
			});
		}
	}
} 

// var mainItem = document.getElementsByClassName('.main-list__item');
// for (var i = 0 ; i < mainItem.length; i++) {
// 	mainItem[i].addEventListener('mouseenter', showSubMenu, false);
// 	mainItem[i].addEventListener('mouseleave', hideSubMenu, false);
// }

// function showSubMenu () {
// 	if (this.children.length > 1) {
// 		this.children[1].style.display = 'block';
// 	} else {
// 		return false;
// 	}
// }

// function hideSubMenu () {
// 	if (this.children.length > 1) {
// 		this.children[1].style.display = 'none';
// 	} else {
// 		return false;
// 	}
// }