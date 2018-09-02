/**************** Nav Transformation ****************/ 

var element = document.querySelector('.nav-content');

function myFunction(ctx) {
  element.classList.toggle("active");
  
  if (element.style.maxHeight){
    element.style.maxHeight = null;
  } else {
    element.style.maxHeight = element.scrollHeight + "px";
  } 
  
  ctx.classList.toggle("change");
}

/**************** Sliders ****************/ 
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/****************  ****************/ 
