var floor = document.querySelectorAll('.floor');
var floorNumber = document.querySelector('.floor-number');
var flat =document.querySelectorAll('.flat');
var flatMetres = document.querySelector('.flat-metres');
var modal = document.querySelector('.modal');
var modalTitle = document.querySelector('.modal-title');
var modalOverlay = document.querySelector('.modal-overlay');
var planImg = document.querySelector('.plan-img');
var svg1 = document.querySelector('.svg-first');
var svg2 = document.querySelector('.svg-second');

// Подсвечивание этажей при наведении и вывод номера этажа

for (var i = 0 ; i < floor.length; i++) {
		floor[i].addEventListener('mouseenter', function (evt) {
				var coords = evt.target.getBoundingClientRect();
				var top = (coords.top + coords.bottom)/2 - 5;
				floorNumber.style.display = 'block';
				floorNumber.innerHTML = evt.target.dataset.floor + ' этаж';
				floorNumber.style.top = top + 'px'
			});
		floor[i].addEventListener('mouseleave', function (evt) {
				floorNumber.style.display = 'none';
			});
	}

// Открытие планировки этажа при клике на этаж 

for (var i = 0 ; i < floor.length; i++) {
   		floor[i].addEventListener('click', function (evt) {
            modalOverlay.classList.add("overlay-show");
            modal.classList.add("modal-show");
            modalTitle.innerHTML = evt.target.dataset.floor + ' этаж';
            planImg.src = evt.target.dataset.plan;
    }); 
}

// Открытие другого svg-плана при клике на 2 этаж 

floor[1].addEventListener('click', function (evt) {
		svg1.classList.add('svg-hide');
        svg2.classList.remove('svg-hide');
});

// Подсветка квартир и вывод квадратуры

for (var i = 0 ; i < flat.length; i++) {
		flat[i].addEventListener('mouseenter', function (evt) {
				flatMetres.style.display = 'block';
				flatMetres.innerHTML = evt.target.dataset.title;
				flatMetres.style.background = 'rgba(51,0,204,0.3)';
				if (this.classList.contains ('flat-sold')) {
					flatMetres.style.background = 'rgba(255,0,0,0.5)';
				}
			});
		flat[i].addEventListener('mouseleave', function (evt) {
				flatMetres.style.display = 'none';
			});
	}

// Закрытие модального окна с планировкой

modalOverlay.addEventListener("click", function (evt) {
            modalOverlay.classList.remove("overlay-show");
            modal.classList.remove("modal-show");
        });