var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight ="300px"
        }
        else{
            MenuItems.style.maxHeight = "0px"
        }
    }

    function imgblur(toggle, e) {
        console.log("helllloo", toggle, e);
        if (toggle == "on") {
           var avatar_info =  e.document.getElementByClass("avatar_info")
           avatar_info.style.displ 
           //   e.src = "ONbulb.jpg";
        } else {
          e.src = "OFFbulb.jpg";
        }
      }