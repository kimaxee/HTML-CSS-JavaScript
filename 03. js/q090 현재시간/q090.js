var id;
var pw;
var loginId;
var loginPw;
var loginBox;
var clock;
var now = new Date();

    document.write(now.getFullYear() + "년 "
        + (now.getMonth() + 1) + "월 "
        + now.getDate() + "일 "
        + now.getHours() + "시 "
        + now.getMinutes() + "분 "
        + now.getSeconds() + "초 "
        + now.getMilliseconds() + "밀리초"
    )

function loginInfo() {
    id = loginId.value;
    pw = loginPw.value;

    if (id == 1234 && pw == 1234) {
        alert("로그인 성공")
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin() {
    loginBox.innerHTML = id + " 회원님 반갑습니다." + "<a href='q082.html'><input type='button' value='뒤로가기'></a>"
}

window.onload = function () {
    loginId = document.getElementById("login_id");
    loginPw = document.getElementById("login_pw");
    loginBox = document.getElementById("login_box");
}

