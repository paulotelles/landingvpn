// -------------------------
//  LISTENER E ALTERAÇÕES DO MENU DO HEADER
//--------------------------

/*definição de variaveis para o listener de @media e o de clique no menu*/
let toggleMenuButton = document.querySelector(".menu__toggle");
let menuToggle = document.querySelector(".menu__mainmenu");
let menuIconToggle = document.querySelector(".menu__toggle");
let overlayDiv = document.querySelector(".overlay");

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

// -------------------------
//  LISTENER DO MENU DO FOOTER
//--------------------------

let buttonMenuFooter = document.querySelectorAll(".footercontent__menu-header");

buttonMenuFooter.forEach((buttonMenu) => {
  buttonMenu.addEventListener("click", () => {
    let menuVar = buttonMenu.parentElement;
    if (menuVar.classList.contains("active")) {
      return menuVar.classList.remove("active");
    }

    return menuVar.classList.add("active");
  });
});

// ------------------------------------------------------------------------------
//  LISTENER DAS ALTERAÇÕES DE QUERRY PARA MODIFICAR O MENU DO HEADER E DO FOOTER
//-------------------------------------------------------------------------------

/*criação de váriavel para observar a mudança de media queries*/
let mql = window.matchMedia("(max-width: 639px)");

/*adicionei um listener para identificar a mudança de @media e esconder o menu do header.*/
mql.addEventListener("change", () => {
  if (menuToggle.classList.contains("menuactive")) {
    menuIconToggle.classList.remove("active");
    return menuToggle.classList.remove("menuactive");
  }
});

/*Procurando se o menu do footer está aberto*/

/*Removendo a class active do menu do footer caso esteja aberto */

mql.addEventListener("change", () => {
  let menuFooter = document.querySelectorAll(
    ".footercontent__menu-area.active"
  );
  menuFooter.forEach((buttonFooter) => {
    if (buttonFooter.classList.contains("active")) {
      return buttonFooter.classList.remove("active");
    }
  });
});

// -------------------------
//  INICIALIZAÇÃO DOS SWIPERS
//--------------------------

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

var swiperCard = new Swiper(".swiper-card2", {
  spaceBetween: 31,
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".button-forward",
    prevEl: ".button-backward",
  },

  breakpoints: {
    640: {
      slidesPerView: "auto",
    },
  },
});
