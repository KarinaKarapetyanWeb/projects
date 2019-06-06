'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu(link, menu) {
    _classCallCheck(this, Menu);

    this.link = document.querySelector('[data-link=' + link + ']');
    this.menu = document.querySelector('[data-menu=' + menu + ']');

    this.link.addEventListener('click', this.showMenu.bind(this));

    this.show = menu + '-show';
    this.hide = menu + '-hide';
    this.active = link + '-active';
    this.notActive = link + '-not-active';

    this._show = false;
  }

  _createClass(Menu, [{
    key: 'showMenu',
    value: function showMenu() {
      if (!this._show) {
        this.menu.classList.remove(this.hide);
        this.menu.classList.add(this.show);

        this.link.classList.add(this.active);
        this.link.classList.remove(this.notActive);

        this._show = true;
      } else {
        this.menu.classList.remove(this.show);
        this.menu.classList.add(this.hide);

        this.link.classList.remove(this.active);
        this.link.classList.add(this.notActive);

        this._show = false;
      }
    }
  }]);

  return Menu;
}();

// desktop menu


var menu1 = new Menu('djem', 'djem');

var menu4 = new Menu('set', 'set');

// mobile menu level 1
var menu2 = new Menu('mobile', 'mobile');

//mobile menu level 2
var menu3 = new Menu('mobile-2', 'mobile-2');

var menu5 = new Menu('mobile-3', 'mobile-3');