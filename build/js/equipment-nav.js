var navEquip=document.querySelector(".equipment-nav__wrapper"),navEquipToggle=document.querySelector(".equipment-nav__toggle");navEquipToggle.addEventListener("click",function(){navEquip.classList.contains("equipment-nav__wrapper--closed")?(navEquip.classList.remove("equipment-nav__wrapper--closed"),navEquip.classList.add("equipment-nav__wrapper--opened"),navEquipToggle.classList.remove("equipment-nav__toggle--open"),navEquipToggle.classList.add("equipment-nav__toggle--close")):(navEquip.classList.add("equipment-nav__wrapper--closed"),navEquip.classList.remove("equipment-nav__wrapper--opened"),navEquipToggle.classList.remove("equipment-nav__toggle--close"),navEquipToggle.classList.add("equipment-nav__toggle--open"))});