/* ---------------- */
/* ---------------- */
/* Objects */
var btn_OpenClose_menu;
var hd__wrapper;
var hd__container;
var hd__search;

window.addEventListener("load", () => {
  btn_OpenClose_menu = document.getElementById("hd__btnClose");
  hd__wrapper = document.getElementById("hd__wrapper");
  hd__container = document.getElementById("hd__container").firstElementChild;
  hd__search = document.getElementById("hd__search");

  btn_OpenClose_menu.addEventListener("click", hd_show_Header);
})

window.addEventListener("resize", () => {
  $(".hd__menu-secondary").css("display", "");
  $(".hd__menu-tertiary").css("display", "");

  $(".hd__label-menu").removeClass("hd__label-menu-active");
  $(".hd__label-subMenu").removeClass("hd__label-subMenu-active");


  if (!validationWidth()) {
    $("#hd__search-desktop").slideUp("fast");
  } else {
    hd__wrapper.style.display = "";
  }

  hd__wrapper.classList.remove("show_header");
  btn_OpenClose_menu.classList.remove("change_style");
  hd__wrapper.style.width = "auto";
  hd__container.style.width = "auto";
  hd__search.style.width = "auto";

  $("#hd__search-desktop").removeClass("hd__show-search");
  $("#hd__wrapper")
    .removeClass("hd__hide-container")
    .addClass("hd__show-container");
  setTimeout(() => {
    $("#hd__wrapper").removeClass("hd__show-container");
  }, 400)

  document.getElementsByTagName("body")[0].style.overflow = "auto";
  document.getElementsByTagName("body")[0].style.position = "initial";
})

function validationWidth(value = 1025) {
  let wth = $(document).width()
  if (wth > value) {
    return true;
  } else {
    return false;
  };
}

/* ---------------- */
/* ---------------- */
/* Show Header */
/* ---------------- */
/* ---------------- */
function hd_show_Header() {
  if (true) {
    if (!hd__wrapper.classList.contains("show_header")) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      document.getElementsByTagName("body")[0].style.position = "fixed";

      btn_OpenClose_menu.classList.add("change_style");
      hd__wrapper.classList.add("show_header");

      hd__wrapper.style.width = "auto";

      let width__app = $(document).width();
      let width;

      if (validationWidth()) {
        width = (width__app * 75) / 100;
      } else {
        width = width__app;
      }

      hd__wrapper.style.width = "0px";
      hd__container.style.width = `${width}px`;
      hd__search.style.width = `${width - 14}px`;

      setTimeout(() => {
        hd__wrapper.style.width = `${width}px`;
      }, 0)
    } else {
      hd__wrapper.style.width = "0px";
      btn_OpenClose_menu.classList.remove("change_style");

      hd__wrapper.addEventListener("transitionend", () => {
        hd__wrapper.classList.remove("show_header");
        hd__container.style.width = "auto";
        hd__search.style.width = "auto";

        $(".hd__menu-secondary").css("display", "");
        $(".hd__menu-tertiary").css("display", "");

        $(".hd__label-menu").removeClass("hd__label-menu-active");
        $(".hd__label-subMenu").removeClass("hd__label-subMenu-active");

        document.getElementsByTagName("body")[0].style.overflow = "auto";
        document.getElementsByTagName("body")[0].style.position = "initial";
      }, { once: true });
    }
  }
}

/* ---------------- */
/* ---------------- */
/* Open Menu */
/* ---------------- */
/* ---------------- */
$(".hd__label-menu").click(function (event) {
  if (!validationWidth(1375)) {
    event.preventDefault();

    $(this).toggleClass("hd__label-menu-active");
    $(this).siblings("ul").slideToggle("fast");
  }
});
$(".hd__label-subMenu").click(function (event) {
  if (!validationWidth(1375)) {
    event.preventDefault();

    $(this).toggleClass("hd__label-subMenu-active");
    $(this).siblings("ul").slideToggle("fast");
  }
});


/* ---------------- */
/* ---------------- */
/* Open Serch Destop */
/* ---------------- */
/* ---------------- */
$("#hd__icon-search").click(function (event) {
  event.preventDefault();
  $("#hd__search-desktop").addClass("hd__show-search");
  $("#hd__wrapper").addClass("hd__hide-container");
})
$("#hd__icon-close").click(function (event) {
  $("#hd__search-desktop").removeClass("hd__show-search");
  $("#hd__wrapper")
    .removeClass("hd__hide-container")
    .addClass("hd__show-container");
  setTimeout(() => {
    $("#hd__wrapper").removeClass("hd__show-container");
  }, 400)
})

/* ---------------- */
/* ---------------- */
/* Reduce */
/* ---------------- */
/* ---------------- */
window.addEventListener('scroll', function (e) {
  if (validationWidth(1375)) {
    let y = window.scrollY;
    console.log(y)
    if (y > 25 && y != 0) {
      $("#hd__wrapper").parent("section").addClass("reduce");
    } else if (y === 0) {
      $("#hd__wrapper").parent("section").removeClass("reduce");
    }
  }
});