let menu = document.getElementById('menu');
let btn = document.getElementById('btn');
let menuMobile = false;

function toggleMenu() {
  menuMobile = !menuMobile;

  if(menuMobile) {
   menu.style.left = "0px";
   menu.style.animationName = "menuMobile"
  }else{
    menu.style.left = "-1000px";
    menu.style.animationName = " "
   }
}

