var isOpened = false;


function popupClose() {
    var popupWindow = document.getElementById("popup");


    if (isOpened == false) {

        popupWindow.style.height = "600px";
        popupWindow.style.width = "600px";
        popupWindow.style.background = "blue";

        popupWindow.style.transitionProperty = "height, width, background";
        popupWindow.style.transitionDuration = "1s";

        isOpened = true;
    } else {
        popupWindow.style.height = "300px";
        popupWindow.style.width = "300px";
        popupWindow.style.background = "white";

        popupWindow.style.transitionProperty = "height, width, background";
        popupWindow.style.transitionDuration = "1s";

        isOpened = false;

    }
}



