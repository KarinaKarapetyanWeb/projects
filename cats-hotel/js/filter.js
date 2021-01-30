var catalog = document.querySelector('.catalog');
var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allCards = Array.from(document.querySelectorAll('.card'));
var form = document.querySelector('.filter__form');
var submitBtn = document.querySelector('.filter__submit-btn');
var resetBtn = document.querySelector('.filter__reset-btn');
var priceFrom = document.querySelector('input[name="price-from"]');
var priceTo = document.querySelector('input[name="price-to"]');
var checked = {};

if (catalog) {
  form.addEventListener('change', function() {
    resetBtn.classList.add('filter__reset-btn--show');
  });

  submitBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      var valueFrom = priceFrom.value;
      var valueTo = priceTo.value;
      getChecked('room');
      getChecked('square');
      setVisibility(valueFrom, valueTo);
  });

  resetBtn.addEventListener('click', function(evt) {
    for (var i = 0; i < allCards.length; i++) {
      allCards[i].style.display = 'block';
    }  
  });
      
  function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
      return el.value;
    });
  }

  function intersection(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
  }

  function setVisibility(valueFrom, valueTo) {
    allCards.map(function (el) {
      var price = el.querySelector('.card__price span').textContent;
      var priceNumber = price.slice(0, -1);
      var room = checked.room.length ? intersection(Array.from(el.classList), checked.room).length : true;
      var square = checked.square.length ? intersection(Array.from(el.classList), checked.square).length : true;
      if (room && square && +valueFrom <= +priceNumber && +priceNumber <= +valueTo) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';  
      }
    });
  }
}
