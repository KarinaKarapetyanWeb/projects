var mainToggle1=document.querySelector(".slider__toggle-1"),mainToggle2=document.querySelector(".slider__toggle-2"),mainToggle3=document.querySelector(".slider__toggle-3"),mainSlider=document.querySelector(".page-main-slider .slider__list"),mainSize=window.innerWidth;mainToggle1.addEventListener("click",function(){mainToggle2.classList.contains("slider__toggle--active")?(mainSlider.style.transform="translateX(0px)",mainToggle2.classList.remove("slider__toggle--active"),mainToggle1.classList.add("slider__toggle--active")):mainToggle3.classList.contains("slider__toggle--active")&&(mainSlider.style.transform="translateX(0px)",mainToggle3.classList.remove("slider__toggle--active"),mainToggle1.classList.add("slider__toggle--active"))}),mainToggle2.addEventListener("click",function(){mainToggle1.classList.contains("slider__toggle--active")?(mainSlider.style.transform="translateX("+-mainSize+"px)",mainToggle1.classList.remove("slider__toggle--active"),mainToggle2.classList.add("slider__toggle--active")):mainToggle3.classList.contains("slider__toggle--active")&&(mainSlider.style.transform="translateX("+-mainSize+"px)",mainToggle3.classList.remove("slider__toggle--active"),mainToggle2.classList.add("slider__toggle--active"))}),mainToggle3.addEventListener("click",function(){mainToggle1.classList.contains("slider__toggle--active")?(mainSlider.style.transform="translateX("+2*-mainSize+"px)",mainToggle1.classList.remove("slider__toggle--active"),mainToggle3.classList.add("slider__toggle--active")):mainToggle2.classList.contains("slider__toggle--active")&&(mainSlider.style.transform="translateX("+2*-mainSize+"px)",mainToggle2.classList.remove("slider__toggle--active"),mainToggle3.classList.add("slider__toggle--active"))});