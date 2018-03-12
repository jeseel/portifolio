setActive("myTopMenu");

function toMenuNav() {
    var menu = document.getElementById("myTopMenu");
    var content = document.getElementById("content");
    if (menu.className === "topMenu") {
        menu.className += " responsive";
    } else {
        menu.className = "topMenu"
        menu.style.backgroundColor = "#333";
    }
}

function setActive(buttonId) {
    var menu = document.getElementById(buttonId);
    if (menu === null) return;
    var btns = menu.getElementsByClassName("btn");
    // repeat all buttons and listener click event
    for (let index = 0; index < btns.length; index++) {
        console.log("x");
        btns[index].addEventListener("click", function () {
            if (btns[index].className.includes("active"))
                return;

            //remove class active from all button and add new class active in the button
            for (let i = 0; i < btns.length; i++) {
                if (btns[i].classList.length > 1)
                    btns[i].className = btns[i].className.replace(" active", "");
            }
            this.className += " active";
        })
    }
}
