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

/****************  ****************/ 