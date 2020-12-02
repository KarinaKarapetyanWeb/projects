'use strict';

(function () {

	document.getElementById('range').addEventListener('input', function() {
	  this.style.background = 'linear-gradient(to right, #016BB8 0%, #11A8FD ' + this.value + '%, #202226 ' + this.value + '%, #202226 100%)'
	});

})();