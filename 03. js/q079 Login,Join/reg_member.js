var id;
var pw1;
var pw2;
var member_name;
var email;
var memberId;
var memberPw1;
var memberPw2;
var memberName;
var memberEmail;
var memberBirthday;
var memberSex;
var memberNumber;
var confirmPw;

function completeJoin() {
    document.getElementById("member_join_box").innerHTML = "<h1>가입완료!</h1>"
}

function textLengthCheck() {
    id = memberId.value;
    pw1 = memberPw1.value;
    pw2 = memberPw2.value;
    member_name = memberName.value;
    email = memberEmail.value;
    
    if (id.length < 4 || id.length > 12) {
        alert("아이디는 4자이상 12자이하로 입력하세요");
        return;
    }
    if (pw1.length < 4 || pw1.length > 12) {
        alert("암호는 4자이상 12자이하로 입력하세요");
        return;
    }
    if (member_name.length < 2 || member_name.length > 8) {
        alert("이름은 2자이상 8자이하로 입력하세요");
        return;
    }
    if (email.length < 4 || email.length > 25) {
        alert("이메일은 4자이상 25자이하로 입력하세요");
        return;
    }
}
function confirmPassword() {
    pw1 = memberPw1.value;
    pw2 = memberPw2.value;
    confirmPw = document.getElementById('confirm_pw');
    if (pw1 == pw2) {
        confirmPw.innerHTML = "암호가 일치합니다."
    } else {
        confirmPw.innerHTML = "암호가 일치하지 않습니다."
    } 
}

window.onload = function () {
    memberId = document.getElementById("member_id");
    memberPw1 = document.getElementById("member_pw1");
    memberPw2 = document.getElementById("member_pw2");
    memberName = document.getElementById("member_name");
    memberEmail = document.getElementById("member_email");
    memberBirthday = document.getElementById("member_birthday");
    memberSex = document.getElementById("member_sex");
    memberNumber = document.getElementById("member_number");
}




