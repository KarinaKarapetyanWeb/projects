var modal = document.querySelector('.modal');
var modalOpen = document.querySelector('.modal-open');
var modalBtn = document.querySelector('.modal__btn');

modalOpen.addEventListener('click', function(evt) {
		evt.preventDefault();
	 	modal.classList.add('modal--show');
});

modalBtn.addEventListener('click', function(evt){
	 	modal.classList.remove('modal--show');
});

