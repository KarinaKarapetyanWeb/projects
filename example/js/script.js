const example = document.querySelector('.example');
const range = document.querySelector('.toggle-controls__scale');
const beforeWrap = document.querySelector('.example__image-wrap--before');
const afterWrap = document.querySelector('.example__image-wrap--after');

range.addEventListener('input', function (evt) {
  let value = range.value;

  afterWrap.style.width = `${value}%`;

  // точка на разрешении 1440px, когда градиент секции доходит до фото с котом "стало". 
  // if (value <= 10) {
  // 	afterWrap.style.backgroundImage = `none`;
  // } else {
  // 	afterWrap.style.backgroundImage = `linear-gradient(to bottom, #fff 192px, #EAEAEA 192px)`;
  // }

  if (window.innerWidth >= 1440) {
  	example.style.backgroundImage = `linear-gradient(to right, #F2F2F2 ${100 - 0.5*value}%, #EAEAEA ${0.5*value}%)`;
  	// конечная точка градиента = 50%, поэтому находим значение на единицу 0.5 и считаем от value
  }
 
});