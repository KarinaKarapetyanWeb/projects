var filterByDirection = document.querySelector('.equipment-nav__filter--by-direction');
var filterByCategory = document.querySelector('.equipment-nav__filter--by-category');
var directionList = document.querySelector('.by-direction__list');
var categoryList = document.querySelector('.by-category__list');

filterByDirection.addEventListener ('click', function() {
	filterByCategory.classList.remove ('equipment-nav__filter-item--active');
	filterByDirection.classList.add ('equipment-nav__filter-item--active');
	directionList.style.display = 'block';
	categoryList.style.display = 'none';
});

filterByCategory.addEventListener ('click', function() {
	filterByDirection.classList.remove ('equipment-nav__filter-item--active');
	filterByCategory.classList.add ('equipment-nav__filter-item--active');
	categoryList.style.display = 'block';
	directionList.style.display = 'none';
});
