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
      roundMenu.style.width = "100vh";
      roundMenu.style.height = "100vh";
      roundMenu.style.top = "-100px";
      roundMenu.style.right = "-150px";

      toggleMenuStatus = true;

   } else {
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

let openButton = document.querySelector('.open-menu');
let closeButton = document.querySelector('.close-menu');

openButton.addEventListener('click', () => toggleMenu());
closeButton.addEventListener('click', () => toggleMenu());

//Scroll navbar hider
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
   //sroll navbar color changer
   const nav = document.querySelector('#navbar');
   if (this.scrollY <= 30) {
      nav.className = '';
   } else {
      nav.className = 'bg-white';
   }

   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
   } else {
      document.getElementById("navbar").style.top = "-80px";
   }
   prevScrollpos = currentScrollPos;
}

/*FOOTER ACTIONS */

var coffee = document.getElementById('coffee');
var underline2 = document.getElementById('underline2');

function isHover(e) {
   return (e.parentElement.querySelector(':hover') === e);
}
document.addEventListener('mousemove', function checkHover() {
   var hovered = isHover(coffee);
   if (hovered !== checkHover.hovered) {
      hovered ?
         underline2.style.width = "75px" :
         underline2.style.width = "50px";
      checkHover.hovered = hovered;
   }
});