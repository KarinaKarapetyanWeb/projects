for(var itemDirection=document.querySelectorAll(".by-direction__list-item--arrow"),itemCategory=document.querySelectorAll(".by-category__list-item--arrow"),itemSubMenu=document.querySelectorAll(".sub-menu__item--arrow"),salesLink=document.querySelector(".sales-link"),i=0;i<itemDirection.length;i++)itemDirection[i].addEventListener("mouseenter",function(e){salesLink.style.display="none"}),itemDirection[i].addEventListener("mouseleave",function(e){salesLink.style.display="block"});for(i=0;i<itemCategory.length;i++)itemCategory[i].addEventListener("mouseenter",function(e){salesLink.style.display="none"}),itemCategory[i].addEventListener("mouseleave",function(e){salesLink.style.display="block"});