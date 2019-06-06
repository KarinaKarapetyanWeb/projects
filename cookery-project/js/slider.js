'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider(sliderName, index) {
    _classCallCheck(this, Slider);

    this.slides = [].concat(_toConsumableArray(document.querySelectorAll('[data-slide="' + sliderName + '-slide"]')));
    this.btnLeft = document.querySelector('[data-btn-left="' + sliderName + '-prev"]');
    this.btnRight = document.querySelector('[data-btn-right="' + sliderName + '-next"]');

    this.btnLeft.addEventListener('click', this.prevSlide.bind(this));
    this.btnRight.addEventListener('click', this.nextSlide.bind(this));
    this._slide = index;

    this.showClass = sliderName + '-slide_active';
    this.hideClass = sliderName + '-slide';
  }

  _createClass(Slider, [{
    key: 'nextSlide',
    value: function nextSlide() {
      var slides = this.slides;
      var hideClass = this.hideClass;
      var showClass = this.showClass;

      // hide slide

      slides[this._slide].classList.add(hideClass);
      slides[this._slide].classList.remove(showClass);

      this._slide++;

      if (this._slide >= slides.length) this._slide = 0;

      //show slide
      slides[this._slide].classList.add(showClass);
      slides[this._slide].classList.remove(hideClass);
    }
  }, {
    key: 'prevSlide',
    value: function prevSlide() {
      var slides = this.slides;
      var hideClass = this.hideClass;
      var showClass = this.showClass;

      // hide slide

      slides[this._slide].classList.add(hideClass);
      slides[this._slide].classList.remove(showClass);

      if (this._slide === 0) this._slide = slides.length;

      this._slide--;

      // show slide
      slides[this._slide].classList.add(showClass);
      slides[this._slide].classList.remove(hideClass);
    }
  }]);

  return Slider;
}();

// slider for other


var slider1 = new Slider('other', 0);

// slider for composition
var slider2 = new Slider('comp', 0);

// slider for recipe
var slider3 = new Slider('recipe', 0);