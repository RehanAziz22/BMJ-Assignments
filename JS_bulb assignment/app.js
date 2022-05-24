function bg_color() {
  var container = document.getElementById("container");
  var bgColorName = prompt("Enter Background Color");
  container.style.backgroundColor = bgColorName;
}

function textColor() {
  var heading = document.getElementById("heading");
  var textColor = prompt("Enter TEXT Color");
  heading.style.color = textColor;
}

function imgHandler(condition) {
  var img = document.getElementById("img");
  console.log(condition);
    img.style.margin = "auto";
  if (condition == "show") {
    img.style.display = "block";
  } else if (condition == "hide") {
    img.style.display = "none";
  } else if (condition == "small") {
    img.style.width = "200px";
    img.style.height = "200px";
  } else if (condition == "large") {
    img.style.width = "400px";
    img.style.height = "400px";
  } else {
    return;
  }
}

function imgChange(toggle, e) {
  console.log("helllloo", toggle, e);
  if (toggle == "on") {
    e.src = "ONbulb.jpg";
  } else {
    e.src = "OFFbulb.jpg";
  }
}

function paraColor() {
    var para = document.getElementsByTagName("p");
    var textColor = prompt("Enter Color");
    para.style.color = textColor;
  }
