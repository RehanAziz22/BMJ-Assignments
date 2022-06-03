//css library

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

function imgHandler1() {
  var allToShow = document.getElementsByClassName("all");
  for (var i = 0; i < allToShow.length; i++) {
    allToShow[i].style.visibility = "visible";
    allToShow[i].style.display = "block";
  }
}
function imgHandler2() {
  var stageToHide = document.getElementsByClassName("stage");
  var decorationToHide = document.getElementsByClassName("decoration");
  var cakeToHide = document.getElementsByClassName("cake");

  for (var i = 0; i < decorationToHide.length; i++) {
    decorationToHide[i].style.visibility = "hidden";
    decorationToHide[i].style.display = "none";
  }
  for (var i = 0; i < stageToHide.length; i++) {
    stageToHide[i].style.visibility = "visible";
    stageToHide[i].style.display = "block";
  }
  for (var i = 0; i < cakeToHide.length; i++) {
    cakeToHide[i].style.visibility = "hidden";
    cakeToHide[i].style.display = "none";
  }
}
function imgHandler3() {
  var stageToHide = document.getElementsByClassName("stage");
  var decorationToHide = document.getElementsByClassName("decoration");
  var cakeToHide = document.getElementsByClassName("cake");

  for (var i = 0; i < decorationToHide.length; i++) {
    decorationToHide[i].style.visibility = "visible";
    decorationToHide[i].style.display = "block";
  }
  for (var i = 0; i < stageToHide.length; i++) {
    stageToHide[i].style.visibility = "hidden";
    stageToHide[i].style.display = "none";
  }
  for (var i = 0; i < cakeToHide.length; i++) {
    cakeToHide[i].style.visibility = "hidden";
    cakeToHide[i].style.display = "none";
  }
}
function imgHandler4() {
  var stageToHide = document.getElementsByClassName("stage");
  var decorationToHide = document.getElementsByClassName("decoration");
  var cakeToHide = document.getElementsByClassName("cake");

  for (var i = 0; i < cakeToHide.length; i++) {
    cakeToHide[i].style.visibility = "visible";
    cakeToHide[i].style.display = "block";
  }
  for (var i = 0; i < decorationToHide.length; i++) {
    decorationToHide[i].style.visibility = "hidden";
    decorationToHide[i].style.display = "none";
  }
  for (var i = 0; i < stageToHide.length; i++) {
    stageToHide[i].style.visibility = "hidden";
    stageToHide[i].style.display = "none";
  }
}

