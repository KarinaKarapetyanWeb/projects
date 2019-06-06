var modalCoop = document.querySelector('[data-modal-window="send-modal-coop"]');
var formCoop = modalCoop.querySelector("form");
var userName = formCoop.querySelector("#user-name");
var userTel = formCoop.querySelector("#user-tel");
var userMail = formCoop.querySelector("#user-mail");
var checkbox = formCoop.querySelector("input[type=checkbox]");

formCoop.addEventListener("submit", function (evt) {
            if (!userName.value || !userTel.value || !userMail.value || !checkbox.checked) {
                evt.preventDefault();
                modalCoop.classList.remove("modal-error");
                modalCoop.offsetWidth = modal.offsetWidth;
                modalCoop.classList.add("modal-error");
            } 
        });