var link = document.querySelector(".btn-feedback");
var popupFeedback = document.querySelector(".modal-feedback");
var close = popupFeedback.querySelector(".modal-close");

var form = popupFeedback.querySelector("form");
var userName = popupFeedback.querySelector("#user-name");
var userMail = popupFeedback.querySelector("#user-feedback-mail");
var comment = popupFeedback.querySelector("#user-comment");

link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popupFeedback.classList.add("modal-show");
            userName.focus();    
    }); 

close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popupFeedback.classList.remove("modal-show");
            popupFeedback.classList.remove("modal-error");
        });

form.addEventListener("submit", function (evt) {
            if (!userName.value || !userMail.value) {
                evt.preventDefault();
                popupFeedback.classList.remove("modal-error");
                popupFeedback.offsetWidth = popupFeedback.offsetWidth;
                popupFeedback.classList.add("modal-error");

            } 
        });

// window.addEventListener("keydown", function (evt) {
//             if (evt.keyCode === 27 ) {
                
//                 if (popupFeedback.classList.contains("modal-show")) {
//                     evt.preventDefault();
//                     popupFeedback.classList.remove("modal-show");
//                     popup.classList.remove("modal-error");
//                 }
//             }
//         });

window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27 && popupFeedback.classList.contains("modal-show")) {
                    evt.preventDefault();
                    popupFeedback.classList.remove("modal-show");
                    popup.classList.remove("modal-error");
                }
        });