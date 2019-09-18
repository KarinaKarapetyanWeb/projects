var filterByDirection = document.querySelector('.equipment-nav__filter--by-direction');
var filterByCategory = document.querySelector('.equipment-nav__filter--by-category');
var filterItem = document.querySelector('.equipment-nav__filter-item');
var filterSlider = document.querySelector('.equipment-nav__list-wrapper');
var filterWrapper = document.querySelector('.equipment-nav__wrapper');
var filterSize;

if (window.innerWidth >= 1200) {
	filterSize = 470;
} else {
	filterSize = 320;
}

filterByDirection.addEventListener ('click', function() {
	if (filterByDirection.classList.contains ('equipment-nav__filter-item--active')) {
		filterSlider.style.transform = none;
	} else 
	filterByCategory.classList.remove ('equipment-nav__filter-item--active');
	filterByDirection.classList.add ('equipment-nav__filter-item--active');
	filterSlider.style.transform = 'translateX(' + (-filterSize) + 'px)';
});

filterByCategory.addEventListener ('click', function() {
	if (filterByCategory.classList.contains ('equipment-nav__filter-item--active')) {
		filterSlider.style.transform = none;
	} else 
	filterByDirection.classList.remove ('equipment-nav__filter-item--active');
	filterByCategory.classList.add ('equipment-nav__filter-item--active');
	filterSlider.style.transform = 'translateX(' + 0 + 'px)';
});
