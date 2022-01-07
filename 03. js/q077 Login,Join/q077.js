window.onload = function () {

    document.getElementById("login_btn").onclick = function () {
        loginInfo();
    }
    document.getElementById("member_join").onclick = function () {
        location.href ="reg_member.html"
    }
}

loginInfo = function () {
    if (login_id.value == 1234 && login_pw.value == 5678) {
        alert("로그인 성공")
        document.getElementById("login_box").innerHTML="1234 회원님 반갑습니다."
    } else {
        alert("로그인 실패")
    }
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