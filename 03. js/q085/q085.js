//js
var btn;
var imgCat;
var isOpened = false;

window.onload = function(){
    btn = document.getElementById("btn");
    imgCat = document.getElementById("cat");
    btn.addEventListener("click",popup);
}

function popup(){
    if(isOpened == false) {
    imgCat.style.display = "inline";
    isOpened = true;
    } else {
        imgCat.style.display = "none";
        isOpened = false;
    }
    
}
