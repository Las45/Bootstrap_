var color = 1;
var current_color_theme = ["white", "black"];

const color_theme_default = ["white", "black"];
const color_theme_blue = ["lightblue", "blue"];
const color_theme_gray = ["lightgray", "black"];
const color_theme_green = ["lightgreen", "darkgreen"];
const color_theme_red = ["lightcoral", "darkred"];
const color_theme_yellow = ["lightyellow", "darkyellow"];

function change_backgroundColor() {
    if (color == 1) {
        for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
            document.body.style.backgroundColor = current_color_theme[0];
            document.getElementsByClassName("card")[i].style.backgroundColor = current_color_theme[0];
            document.getElementsByClassName("card")[i].style.borderColor = current_color_theme[1];
            document.getElementsByClassName("navbar")[0].setAttribute("data-bs-theme", "light");
            document.getElementsByClassName("navbar")[0].style.borderBottom = "1px solid " + current_color_theme[1];
            document.getElementsByClassName("card")[i].style.color = current_color_theme[1];
            document.getElementsByTagName("h1")[0].style.color = current_color_theme[1];
        }
    }
    else{
        for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
            document.body.style.backgroundColor = current_color_theme[1];
            document.getElementsByClassName("card")[i].style.backgroundColor = current_color_theme[1];
            document.getElementsByClassName("card")[i].style.borderColor = current_color_theme[0];
            document.getElementsByClassName("navbar")[0].setAttribute("data-bs-theme", "dark");
            document.getElementsByClassName("navbar")[0].style.borderBottom = "1px solid " + current_color_theme[0];
            document.getElementsByClassName("card")[i].style.color = current_color_theme[0];
            document.getElementsByTagName("h1")[0].style.color = current_color_theme[0];
        }
    }
    color = color * -1;
}

function set_backgroundColor_dark(){
    color = -1;
    change_backgroundColor();
}

function set_backgroundColor_light(){
    color = 1;
    change_backgroundColor();
}

function change_color_theme(theme){
    if (theme === "blue") {
        current_color_theme = color_theme_blue;
    } 
    else if (theme === "gray") {
        current_color_theme = color_theme_gray;
    }
    else if (theme === "green") {
        current_color_theme = color_theme_green;
    }
    else if (theme === "red") {
        current_color_theme = color_theme_red;
    }
    else if (theme === "yellow") {
        current_color_theme = color_theme_yellow;
    }
    else {
        current_color_theme = color_theme_default;
    }
    change_backgroundColor();
}