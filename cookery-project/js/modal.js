var modalButton = document.querySelectorAll('[data-for-modal="send-modal"]');
var modal = document.querySelector('[data-modal-window="send-modal"]');
var modalOverlay = document.querySelector('.send-modal_wrapper');
var close = document.querySelector('.send-modal__close');

var form = modal.querySelector("form");
var userName = form.querySelector("#user-name");
var userTel = form.querySelector("#user-tel");
var userMail = form.querySelector("#user-mail");
var checkbox = form.querySelector("input[type=checkbox]");

for (var i = 0 ; i < modalButton.length; i++) {
   modalButton[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            modalOverlay.classList.add("send-modal_active");
            modal.classList.add("send-modal_active");
    }); 
}

close.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalOverlay.classList.remove("send-modal_active");
            modal.classList.remove("send-modal_active");
            modal.classList.remove("modal-error");
        });

modalOverlay.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalOverlay.classList.remove("send-modal_active");
            modal.classList.remove("send-modal_active");
            modal.classList.remove("modal-error");
        });

window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                    evt.preventDefault();
                    modalOverlay.classList.remove("send-modal_active");
                    modal.classList.remove("send-modal_active");
                    modal.classList.remove("modal-error");
                }
        });

form.addEventListener("submit", function (evt) {
            if (!userName.value || !userTel.value || !userMail.value || !checkbox.checked) {
                evt.preventDefault();
                modal.classList.remove("modal-error");
                modal.offsetWidth = modal.offsetWidth;
                modal.classList.add("modal-error");
            } 
        });