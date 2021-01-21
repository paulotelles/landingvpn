console.log("teste");

/*criação de váriavel para observar a mudança de media queries*/
let mql = window.matchMedia("(max-width: 639px)");

let toogleMenuButton = document.querySelector(".menu__toogle");
let menuToogle = document.querySelector(".menu__mainmenu");
let menuIconToogle = document.querySelector(".menu__toogle");

/*adicionei um listener para identificar a mudança de @media e esconder o menu.*/
mql.addEventListener("change", () => {
  if (menuToogle.classList.contains("menuactive")) {
    menuIconToogle.classList.remove("active");
    return menuToogle.classList.remove("menuactive");
  }
});

toogleMenuButton.addEventListener("click", () => {
  if (menuToogle.classList.contains("menuactive")) {
    menuIconToogle.classList.remove("active");
    return menuToogle.classList.remove("menuactive");
  }

  menuIconToogle.classList.add("active");
  return menuToogle.classList.add("menuactive");
});
