if (document.querySelector(".index")) {
  // Слайдер услуг
  var allServicesTab = Array.prototype.slice.call(document.querySelectorAll(".services-tab__btn"));
  var servicesSlide = document.querySelectorAll(".services-content__item");
  var servicesTab = document.querySelectorAll(".services-tab__btn");

  allServicesTab.forEach(function(button, n) {
    button.addEventListener("click", function() {
      for (var i = 0; i < servicesSlide.length; i++) {
        servicesSlide[i].classList.remove("services-content__item--current");
        servicesTab[i].classList.remove("services-tab__btn--current");
      }
      servicesTab[n].classList.add("services-tab__btn--current");
      servicesSlide[n].classList.add("services-content__item--current");
    });

    button.addEventListener("focus", function() {
      for (var i = 0; i < servicesSlide.length; i++) {
        servicesSlide[i].classList.remove("services-content__item--current");
        allServicesTab[i].classList.remove("services-tab__btn--current");
      }
      servicesTab[n].classList.add("services-tab__btn--current");
      servicesSlide[n].classList.add("services-content__item--current");
    });
  });

  // Отображение карты
  var mapBtn = document.querySelector(".contact-us__map");
  var mapModal = document.querySelector(".map");
  var mapCloseBtn = mapModal.querySelector(".modal__btn--close");

  mapBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapModal.classList.add("modal--show");
  });

  mapCloseBtn.addEventListener("click", function() {
    mapModal.classList.remove("modal--show");
  });

  // форма обратной связи
  var contactsBtn = document.querySelector(".contact-us__btn");
  var contactsModal = document.querySelector(".write-us");
  var contactsCloseBtn = contactsModal.querySelector(".modal__btn--close");

  var userContacts = document.querySelector("#name");
  var mailContacts = document.querySelector("#mail");
  var textContacts = document.querySelector("#message");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("userContacts");
  } catch (err) {
    isStorageSupport = false;
  }

  contactsBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactsModal.classList.add("modal--show");
    if (storage) {
      userContacts.value = storage;
      mailContacts.focus();
    } else {
      userContacts.focus();
    }
  });

  contactsCloseBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactsModal.classList.remove("modal--show");
  });

  // закрытие по кнопке esc
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (contactsModal.classList.contains("modal--show")) {
        evt.preventDefault();
        contactsModal.classList.remove("modal--show");
      } else if (mapModal.classList.contains("modal--show")) {
        evt.preventDefault();
        mapModal.classList.remove("modal--show");
      }
    }
  });
};

//Добавление товара в корзину
if (document.querySelector(".catalog-page")) {
  var modalCart = document.querySelector(".message");
  var buyBtn = document.querySelectorAll(".product-card__btn--cart");
  var cartCloseBtn = document.querySelector(".modal__btn--close");

  if(buyBtn.length) {
    for (var i = 0; i < buyBtn.length; i++) {
      buyBtn[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modalCart.classList.add("modal--show");
      });
    }

    cartCloseBtn.addEventListener("click", function() {
      modalCart.classList.remove("modal--show");
    });
  };

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalCart.classList.contains("modal--show")) {
        modalCart.classList.remove("modal--show");
      }
    }
  });
};
