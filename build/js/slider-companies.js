var prevBtn=document.querySelector(".manufacturers-slider__btn--left"),nextBtn=document.querySelector(".manufacturers-slider__btn--right"),slider=document.querySelector(".manufacturers-slider__list"),sliderItems=document.querySelectorAll(".manufacturers-slider__list-item"),counter=0,size=200;if(nextBtn.addEventListener("click",sliderRight),prevBtn.addEventListener("click",sliderLeft),1200<=window.innerWidth)var number=5;else if(768<=window.innerWidth)number=3;else number=1;function sliderRight(){counter++,slider.style.transform="translateX("+-size*counter+"px)",0<counter&&prevBtn.classList.remove("disabled"),counter<=0&&(prevBtn.classList.add("disabled"),slider.style.transform="none"),counter>=sliderItems.length-number&&(nextBtn.classList.add("disabled"),counter=sliderItems.length-number,slider.style.transform="translateX("+-size*counter+"px)")}function sliderLeft(){counter--,slider.style.transform="translateX("+-size*counter+"px)",0<counter<sliderItems.length-2&&(nextBtn.classList.remove("disabled"),slider.style.transform="translateX("+-size*counter+"px)"),counter<=0&&(prevBtn.classList.add("disabled"),slider.style.transform="none")}