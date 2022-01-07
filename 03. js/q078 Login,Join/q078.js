var id
var pw



function loginInfo() {
    id = login_id.value;
    pw = login_pw.value;
    
    if (id == 1234 && pw == 1234) {
        alert("로그인 성공")
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin() {
    document.getElementById("login_box").innerHTML = id + " 회원님 반갑습니다."
}


window.onload = function() {
    login_id = document.getElementById("login_id");
    login_pw = document.getElementById("login_pw");
    login_box = document.getElementById("login_box");
}




/*  선생님

const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;

function login(){
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        // alert("로그인 성공");
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin(){
    loginBox.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}

window.onload = function(){
    i=document.getElementById("i");
    p=document.getElementById("p");
    loginBox=document.getElementById("login_box");
}

*/