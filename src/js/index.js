/*criação de váriavel para observar a mudança de media queries*/
let mql = window.matchMedia("(max-width: 639px)");

/*definição de variaveis para o listener de @media e o de clique no menu*/
let toggleMenuButton = document.querySelector(".menu__toggle");
let menuToggle = document.querySelector(".menu__mainmenu");
let menuIconToggle = document.querySelector(".menu__toggle");
let overlayDiv = document.querySelector(".overlay");

/*adicionei um listener para identificar a mudança de @media e esconder o menu.*/
mql.addEventListener("change", () => {
  if (menuToggle.classList.contains("menuactive")) {
    menuIconToggle.classList.remove("active");
    return menuToggle.classList.remove("menuactive");
  }
});

/*adicionei um listener para capturar o evento de clique do menu para mobile*/
toggleMenuButton.addEventListener("click", () => {
  if (menuToggle.classList.contains("menuactive")) {
    overlayDiv.className = "overlay";
    menuIconToggle.classList.remove("active");
    return menuToggle.classList.remove("menuactive");
  }

  overlayDiv.className = "overlay-active";
  menuIconToggle.classList.add("active");
  return menuToggle.classList.add("menuactive");
});

/*INICIALIZAÇÃO DO SWIPER*/

var swiperDataValues = new Swiper(".swiper-DataValues", {
  initialSlide: 1,
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiperCard = new Swiper(".swiper-card", {
  initialSlide: 1,
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    960: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
