/* ---------------- */
/* ---------------- */
/* Objects */
var btn_OpenClose_menu;
var hd__wrapper;
var hd__label_menu;
var hd__container;
var hd__search;

window.addEventListener("load", () => {
  btn_OpenClose_menu = document.getElementById("hd__btnClose");
  hd__wrapper = document.getElementById("hd__wrapper");
  hd__container = document.getElementById("hd__container").firstElementChild;
  hd__label_menu = document.getElementsByClassName("hd__label-menu");
  hd__search = document.getElementById("hd__search");

  btn_OpenClose_menu.addEventListener("click", hd_show_Header);

  Array.prototype.forEach.call(hd__label_menu, (element) => {
    console.log(element)
    element.addEventListener("click", (event) => hd_open_Menu(event));
  })
})

function validationWidth(value = 1025){
  if($(document).width() > value){ 
    return true;
  }else{ 
    return false;
  };
}

/* ---------------- */
/* ---------------- */
/* Show Header */
/* ---------------- */
/* ---------------- */
function hd_show_Header() {
  if(true){
    let width__app = $(document).width()
    
    if(!hd__wrapper.classList.contains("show_header")){
      btn_OpenClose_menu.classList.add("change_style");
      hd__wrapper.classList.add("show_header");

      hd__wrapper.style.width = "auto";

      let width;

      if(validationWidth()){
        width = (width__app*93)/100;
      }else{
        width = width__app;
      }

      

      hd__wrapper.style.width = "0px";
      hd__container.style.width = `${width - 14}px`;
      hd__search.style.width = `${width - 14}px`;

      setTimeout(() => {
        hd__wrapper.style.width = `${width}px`;
      }, 0)   
    }else{
      hd__wrapper.style.width = "0px";
      btn_OpenClose_menu.classList.remove("change_style");      
      hd__wrapper.addEventListener("transitionend", () => {
        hd__wrapper.classList.remove("show_header");
        hd__container.style.width = "auto";
        hd__search.style.width = "auto";
      }, {once: true});
    }
  }
}

/* ---------------- */
/* ---------------- */
/* Open Menu */
/* ---------------- */
/* ---------------- */
function hd_open_Menu(event){
  event.preventDefault();

  if(true){
    let target = event.target;
    let menu = event.target.parentNode.nextElementSibling;

    console.log(target, menu)
    if(!menu.classList.contains("hd_OpenMenu")){
      target.classList.add("hd_OpenMenu-label");
      menu.classList.add("hd_OpenMenu");

      menu.style.height  = "auto";

      let height = `${menu.clientHeight}px`;

      menu.style.height  = "0px";

      setTimeout(() => {
        menu.style.height  = height ;
      }, 0)   
    }else{
      menu.style.height = "0px";
      target.classList.remove("hd_OpenMenu-label");

      menu.addEventListener("transitionend", () => {
        menu.classList.remove("hd_OpenMenu");
      }, {once: true})
    }
  }
}
