let toggleMenuStatus = false;

function toggleMenu() {

   let roundMenu = document.querySelector('.round-menu');
   let roundMenuList = document.querySelector('.menu-items');
   let roundMenuTimes = document.querySelector('.close-menu');

   if (toggleMenuStatus === false) {
      roundMenuList.style.visibility = "visible";
      roundMenuList.style.opacity = "1";
      roundMenuTimes.style.visibility = "visible";
      roundMenuTimes.style.opacity = "1";
      roundMenu.style.width = "150vh";
      roundMenu.style.height = "150vh";
      roundMenu.style.top = "-25%";
      roundMenu.style.right = "-15%";

      toggleMenuStatus = true;

   } else if (toggleMenuStatus === true) {
      roundMenuList.style.visibility = "hidden";
      roundMenuList.style.opacity = "0";
      roundMenuTimes.style.visibility = "hidden";
      roundMenuTimes.style.opacity = "0";
      roundMenu.style.width = "0";
      roundMenu.style.height = "0";
      roundMenu.style.top = "0";
      roundMenu.style.right = "0";
      toggleMenuStatus = false;
   }
};
//TODO: switch between clases instead of modifyiing style in js
let openButton = document.querySelector('.open-menu');
let closeButton = document.querySelector('.close-menu');

openButton.addEventListener('click', () => toggleMenu());
closeButton.addEventListener('click', () => toggleMenu());