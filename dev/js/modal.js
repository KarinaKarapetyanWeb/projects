var modalButton = document.querySelectorAll('.modal-open__btn');
var modalClose = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal-overlay');

for (var i = 0 ; i < modalButton.length; i++) {
   modalButton[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            modalOverlay.classList.add("overlay-show");
            modal.classList.add("modal-show");
    }); 
}

modalOverlay.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalOverlay.classList.remove("overlay-show");
            modal.classList.remove("modal-show");
        });

modalClose.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalOverlay.classList.remove("overlay-show");
            modal.classList.remove("modal-show");
        });

window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                    evt.preventDefault();
                    modal.classList.remove("modal-show");
                    modalOverlay.classList.remove("overlay-show");
                }
        });