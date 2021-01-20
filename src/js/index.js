console.log("teste");
let mql = window.matchMedia("(max-width: 639px)");

let toogleMenuButton = document.querySelector(".menu__toogle");
let menuToogle = document.querySelector(".menu__mainmenu");

mql.addEventListener("change", () => {
  if (menuToogle.classList.contains("menuactive")) {
    return menuToogle.classList.remove("menuactive");
  }
});

toogleMenuButton.addEventListener("click", () => {
  if (menuToogle.classList.contains("menuactive")) {
    return menuToogle.classList.remove("menuactive");
  }

  return menuToogle.classList.add("menuactive");
});
