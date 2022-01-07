window.onload = function () {

    document.getElementById("login_btn").onclick = function () {
        loginInfo();
    }
}

loginInfo = function () {
    if (login_id.value == 1234 && login_pw.value == 5678) {
        alert("로그인 성공")
    } else {
        alert("로그인 실패")
    }
}




/*  선생님

const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;

var id;
var pw;

function login(){
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        alert("로그인 성공");
    } else {
        alert("로그인 실패")
    }
}

window.onload = function(){
    i=document.getElementById("i");
    p=document.getElementById("p");

}

*/