'use strict';

(function () {

  const DEBOUNCE_INTERVAL = 200;
  let screenWidth = window.innerWidth;

  const debounce = function (cb) {
    let lastTimeout = null;

    return (...parameters) => {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        cb(...parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  const updateSLiders = function (width) {
    if (width < 768) {

      const swiperExpert = new Swiper('.experts__swiper', {
        speed: 700,
        spaceBetween: 16,
        slidesPerView: 1.15,
      });

      const swiperReview = new Swiper('.reviews__swiper', {
        speed: 700,
        spaceBetween: 16,
        slidesPerView: 1.15,
      });
    }   

    if (width >= 768 && window.innerWidth < 1280) {
      const swiperExpertTablet = new Swiper('.experts__swiper', {
        speed: 700,
        spaceBetween: 16,
        slidesPerView: 2.2,
        navigation: {
          nextEl: '.slider-buttons__item--next',
          prevEl: '.slider-buttons__item--prev',
          clickable: true
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        }
      });

      const swiperReviewTablet = new Swiper('.reviews__swiper', {
        speed: 700,
        spaceBetween: 16,
        slidesPerView: 2.2,
        navigation: {
          nextEl: '.slider-buttons__item--next',
          prevEl: '.slider-buttons__item--prev',
          clickable: true
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        }
      });
    }

    if (width >= 1280) {
      const swiperExpertDesktop = new Swiper('.experts__swiper', {
        speed: 700,
        spaceBetween: 20,
        slidesPerView: 3.2,
        navigation: {
          nextEl: '.slider-buttons__item--next',
          prevEl: '.slider-buttons__item--prev',
          clickable: true
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        }
      });

      const swiperReviewDesktop = new Swiper('.reviews__swiper', {
        speed: 700,
        spaceBetween: 20,
        slidesPerView: 3.2,
        navigation: {
          nextEl: '.slider-buttons__item--next',
          prevEl: '.slider-buttons__item--prev',
          clickable: true
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        }
      });
    }
  }

  const onWindowResize = function () {
    screenWidth = window.innerWidth;
    updateSLiders(screenWidth);
  };

  updateSLiders(screenWidth);

  window.addEventListener('resize', debounce(onWindowResize));

})();