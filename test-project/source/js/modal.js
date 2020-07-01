var modalButton = document.querySelectorAll('.modal-open');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.modal__close');

for (var i = 0 ; i < modalButton.length; i++) {
   modalButton[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            modal.classList.add("modal--show");
            overlay.classList.add("overlay--show");
    }); 
}

close.addEventListener("click", function (evt) {
            evt.preventDefault();
            modal.classList.remove("modal--show");
            overlay.classList.remove("overlay--show");
        });

overlay.addEventListener("click", function (evt) {
            modal.classList.remove("modal--show");
            overlay.classList.remove("overlay--show");
        });