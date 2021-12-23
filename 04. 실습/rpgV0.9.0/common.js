/*
    공통함수들을 모아놓음
*/
function dw(str){    // var str; var str = "고양이";
    var screenSring = rpgResultScreen.value;
    screenSring = screenSring + str;
    rpgResultScreen.value = screenSring;
    // document.write(str);
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}