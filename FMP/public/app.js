var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "300px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};


// function imgChange(toggle,e) {
//   var div = document.getElementById("avatar_info");
//   console.log(toggle,e)
//   if (toggle == "show") {
//     e = div.style.display = "block"
//     return;
//     // div.style.display = "block";
//   } else if (toggle == "off") {
//     e= div.style.display = "none";
//     return;
//   } else {
//     return;
//   }
// }


// function imgChange(toggle,e) {
//   var div = document.getElementById("avatar_info");
//   console.log(toggle,e)
//   if (toggle == "show") {
//     e = div.style.display = "block"
//     return;
//     // div.style.display = "block";
//   } else if (toggle == "off") {
//     e= div.style.display = "none";
//     return;
//   } else {
//     return;
//   }
// }
