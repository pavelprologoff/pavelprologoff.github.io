"use strict";var myMap,myPlacemark,slider=tns({container:".slider",items:1,slideBy:"page",mouseDrag:!0,autoplay:!1}),carpetsSlider=tns({container:"#carpetsSlider",items:1,slideBy:"page",mouseDrag:!1,navContainer:".thumbnails",navAsThumbnails:!0,autoplay:!1}),toggle=function(){document.querySelector(".mobile-controls__burger").addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("close"),document.getElementById("expandedMenu").classList.toggle("hide"),[].map.call(document.querySelectorAll(".bottom-menu"),function(e){e.classList.toggle("active")})})};function drop(e,t){document.getElementById(e).classList.toggle("show"),document.getElementById(t).classList.toggle("show")}function hideDrop(e,t){document.getElementById(e).classList.remove("show"),document.getElementById(t).classList.remove("show")}function disableButtons(){[].map.call(document.querySelectorAll(".checkout__count"),function(e){"1"===e.innerHTML?e.previousElementSibling.setAttribute("disabled",!0):e.previousElementSibling.removeAttribute("disabled")})}function searchFilter(){var e,t,n,o,l,s,a=0;for(e=document.getElementById("search-filter").value.toUpperCase(),o=(t=document.getElementById("search-content")).getElementsByClassName("checkout__listitem"),n=t.getElementsByClassName("list-item"),s=document.getElementById("not-found-list"),l=0;l<n.length;l++)n[l].innerHTML.toUpperCase().indexOf(e)>-1?o[l].style.display="":(o[l].style.display="none",a+=1),n.length===a?s.style.display="":s.style.display="none"}function openTab(e,t,n){var o,l,s;for(l=document.getElementsByClassName(n),o=0;o<l.length;o++)l[o].style.display="none";if(e){for(s=document.getElementsByClassName("toggle-button"),o=0;o<s.length;o++)s[o].className=s[o].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}document.getElementById("dilveryType").innerText="tab1"===t?"Выберите адрес самовывоза в городе":"Выберите службу доставки в город"}function sortBy(e,t){var n,o,l,s,a,c,d;for(n=document.getElementById("sort-list"),l=!0;l;){for(l=!1,s=n.getElementsByClassName("popular-carpets__card"),a=n.getElementsByClassName("popular-carpets__price-main"),o=0;o<a.length-1;o++){d=!1;var i=Number(a[o].innerHTML.toLowerCase().slice(0,-2).replace(/ /g,"")),m=Number(a[o+1].innerHTML.toLowerCase().slice(0,-2).replace(/ /g,""));if("low"===t&&i>m){d=!0;break}if("high"===t&&m>i){d=!0;break}}d&&(s[o].parentNode.insertBefore(s[o+1],s[o]),l=!0)}if(e){for(c=document.getElementsByClassName("toggle-button"),o=0;o<c.length;o++)c[o].className=c[o].className.replace(" active","");e.currentTarget.className+=" active"}}function validate(e){e.value?e.classList.remove("showError"):e.classList.add("showError")}if(toggle(),document.getElementById("toggleTextTitle")&&document.getElementById("toggleTextTitle").addEventListener("click",function(){this.classList.toggle("top"),document.getElementById("toggleText").classList.toggle("hide")}),document.getElementById("coupon")&&(document.getElementById("coupon").addEventListener("click",function(){document.getElementById("couponRow").classList.toggle("hide"),document.getElementById("couponInput").focus(),this.classList.toggle("hide")}),document.getElementById("hideCoupon").addEventListener("click",function(){document.getElementById("couponRow").classList.toggle("hide"),document.getElementById("coupon").classList.toggle("hide")}),document.getElementById("couponApply").addEventListener("click",function(){document.getElementById("couponRow").classList.toggle("hide"),document.getElementById("couponAppled").classList.toggle("hide"),[].map.call(document.querySelectorAll(".checkout__item-price"),function(e){e.classList.toggle("coupon")})})),disableButtons(),[].map.call(document.querySelectorAll(".add-item"),function(e){e.addEventListener("click",function(){var e=parseFloat(this.previousElementSibling.innerHTML);this.previousElementSibling.innerHTML=e+1,disableButtons()})}),[].map.call(document.querySelectorAll(".remove-item"),function(e){e.addEventListener("click",function(){var e=parseFloat(this.nextElementSibling.innerHTML);this.nextElementSibling.innerHTML=e-1,disableButtons()})}),[].map.call(document.querySelectorAll(".selectCity span"),function(e){e.addEventListener("click",function(){this.parentNode.classList.toggle("open")})}),[].map.call(document.querySelectorAll(".selectCity-modal__accept"),function(e){e.addEventListener("click",function(){this.parentNode.parentNode.parentNode.classList.toggle("open")})}),[].map.call(document.querySelectorAll(".selectCityChange"),function(e){e.addEventListener("click",function(){this.parentNode.parentNode.classList.toggle("newCity")})}),[].map.call(document.querySelectorAll(".closeNewCity"),function(e){e.addEventListener("click",function(){this.parentNode.parentNode.classList.toggle("newCity")})}),jQuery(function(e){e("#list-phone").mask("+7 (999) 999-99-99"),e("#modalPhone").mask("+7 (999) 999-99-99")}),document.getElementById("order")&&document.getElementById("order").addEventListener("click",function(){[].map.call(document.querySelectorAll(".validateInput"),function(e){e.value?e.classList.remove("showError"):e.classList.add("showError")});for(var e=!0,t=0;t<document.getElementsByName("check-list").length;t++){if(document.getElementsByName("check-list")[t].checked){e=!0;break}e=!1}e?document.getElementById("delivery").classList.remove("show"):document.getElementById("delivery").classList.add("show")}),document.getElementById("map")){var init=function(){myMap=new ymaps.Map("map",{center:center,zoom:15}),myPlacemark=new ymaps.Placemark(placemarkPoint,{hintContent:"Москва!",balloonContent:"Столица России"}),myMap.geoObjects.add(myPlacemark)};ymaps.ready(init);var center=[55.76,37.64],placemarkPoint=[55.76,37.64]}function swapElements(e,t){var n=document.createElement("div");e.parentNode.insertBefore(n,e),t.parentNode.insertBefore(e,t),n.parentNode.insertBefore(t,n),n.parentNode.removeChild(n)}var togglemap1=!1,togglemap2=!0;document.getElementById("cross-close")&&document.getElementById("cross-close").addEventListener("click",function(){document.getElementById("map").classList.remove("show")}),document.getElementById("sabbiButton")&&document.getElementById("sabbiButton").addEventListener("click",function(){document.getElementById("map").classList.toggle("show"),myPlacemark.geometry.setCoordinates([55.69587,37.664896]),myMap.panTo([55.69587,37.664896],{flying:!0}),document.getElementById("sabbiButton").innerHTML="На карте",document.getElementById("kiddieWorld").innerHTML="Показать на карте",document.getElementById("kiddieWorld").classList.remove("contacts__address-map-button"),document.getElementById("kiddieWorld").classList.add("contacts__address-map-button-transparent"),document.getElementById("sabbiButton").classList.remove("contacts__address-map-button-transparent"),document.getElementById("sabbiButton").classList.add("contacts__address-map-button"),togglemap1&&(swapElements(document.getElementById("map"),document.getElementById("map-mobile-2")),document.getElementById("map").classList.add("show"),togglemap1=!1,togglemap2=!0)}),document.getElementById("kiddieWorld")&&document.getElementById("kiddieWorld").addEventListener("click",function(){document.getElementById("map").classList.toggle("show"),myPlacemark.geometry.setCoordinates([52.51253,85.17341]),myMap.panTo([52.51253,85.17341],{flying:!0}),document.getElementById("kiddieWorld").innerHTML="На карте",document.getElementById("sabbiButton").innerHTML="Показать на карте",document.getElementById("sabbiButton").classList.remove("contacts__address-map-button"),document.getElementById("sabbiButton").classList.add("contacts__address-map-button-transparent"),document.getElementById("kiddieWorld").classList.remove("contacts__address-map-button-transparent"),document.getElementById("kiddieWorld").classList.add("contacts__address-map-button"),togglemap2&&(swapElements(document.getElementById("map"),document.getElementById("map-mobile-2")),document.getElementById("map").classList.add("show"),togglemap1=!0,togglemap2=!1)}),[].map.call(document.querySelectorAll(".showBackCall"),function(e){e.addEventListener("click",function(){document.getElementById("backCallModal").classList.toggle("show")})}),document.getElementById("sendBackCall")&&document.getElementById("sendBackCall").addEventListener("click",function(){var e=!0;[].map.call(document.querySelectorAll(".back-call-modal__main .validateInput"),function(t){t.value?t.classList.remove("showError"):(e=!1,t.classList.add("showError"))}),e&&(document.getElementById("modalInputs").classList.toggle("hide"),document.getElementById("modalTnx").classList.toggle("show"))}),[].map.call(document.querySelectorAll(".modal-close-button"),function(e){e.addEventListener("click",function(){document.getElementById("backCallModal").classList.toggle("show")})}),document.getElementById("zoom")&&document.getElementById("zoom").addEventListener("click",function(){this.parentNode.classList.toggle("zoom")}),document.getElementById("changeSide")&&document.getElementById("changeSide").addEventListener("click",function(){this.classList.contains("back")?document.getElementById("cardPhoto").setAttribute("style","background-image: url(img/carpet-preview.jpg)"):document.getElementById("cardPhoto").setAttribute("style","background-image: url(img/carpet-preview-back.jpg)"),this.classList.toggle("back")}),$(".carpets-slider__slide").click(function(){console.log(this),$(this).hasClass("tns-slide-active")&&!$(this).hasClass("fancybox-content")&&$.fancybox.open({src:$(this).clone(),type:"inline"})});