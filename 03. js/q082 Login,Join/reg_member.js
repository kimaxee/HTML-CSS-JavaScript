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
var confirmPw;


function checkId(id) {
    id = memberId.value;
    if (id.length < 4 || id.length > 12) {
        alert("아이디는 4자이상 12자이하로 입력하세요");
    }
    if (id.length >=4 && id.length <= 12) {
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}

function checkPw1() {
    pw1 = memberPw1.value;
    if (pw1.length < 4 || pw1.length > 12) {
        alert("암호는 4자이상 12자이하로 입력하세요");
    }
    if (pw1.length >=4 && pw1.length <= 12) {
        console.log("ok pw1");
        return true;
    } else {
        console.log("no pw1");
        return false;
    }
}

function checkPw2() {
    pw1 = memberPw1.value;
    pw2 = memberPw2.value;
    if (pw1 == pw2) {
        console.log("ok pw2")
        return true;
    } else {
        alert("암호가 일치하지 않습니다.")
        console.log("no pw2")
        return false;
    }
}

function checkName() {
    member_name = memberName.value;
    if (member_name.length < 2 || member_name.length > 8) {
        alert("이름은 2자이상 8자이하로 입력하세요");
    }
    if (member_name.length >=2 && member_name.length <= 6) {
        console.log("ok member_name");
        return true;
    } else {
        console.log("no member_name");
        return false;
    }
}

function checkEmail() {
    email = memberEmail.value;
    if (email.length < 4 || email.length > 25) {
        alert("이메일은 4자이상 25자이하로 입력하세요");
    }
    if (email.length >=4 && email.length <= 25) {
        console.log("ok email");
        return true;
    } else {
        console.log("no email");
        return false;
    }
}

function checkBirthday() {
    memberBirthday = memberBirthday.value;
    if (memberBirthday > 0) {
        console.log("ok birthday");
        return true;
    } else {
        console.log("no birthday");
        return false;
    }
}

function confirmPassword() {
    pw1 = memberPw1.value;
    pw2 = memberPw2.value;
    confirmPw = document.getElementById('confirm_pw');
    confirmPwError = document.getElementById('confirm_pw');
    if (pw1 == pw2) {
        confirmPw.innerHTML = "<span style='color:blue'>암호가 일치합니다.</span>"
    } else {
        confirmPwError.innerHTML = "<span style='color:red'>암호가 일치하지 않습니다.</span>"
    }
}

function completeJoin() {
    memberId.value;
    memberPw1.value;
    memberPw2.value;
    memberName.value;
    memberEmail.value;
    memberBirthday.value;
    birthM.value;
    birthD.value;
    memberNumber1.value;
    memberNumber2.value;
    memberNumber3.value;
    for (var i = 0; i < memberSexes.length; i++) {
        // joinSexes[i] 의 checked 멤버 변수에 해당
        // radio 가 체크된 상태면 true 가 리턴되므로
        // 둘다 true 면 체크상태라는 뜻
        if (memberSexes[i].checked == true) {
            sex = memberSexes[i].value; // 해당 라디오 버튼의 값을 변수에 저장
        }
    }
    alert(
        "아이디 : " + memberId.value + "\n"
        + "암호 : " + memberPw1.value + "\n"
        + "암호확인 : " + memberPw2.value + "\n"
        + "이름 : " + memberName.value + "\n"
        + "이메일 : " + memberEmail.value + "\n"
        + "생년월일 : " + memberBirthday.value + "년 " + birthM.value + "월 " + birthD.value + "일\n"
        + "성별 : " + sex + "\n"
        + "핸드폰번호 : " + memberNumber1.value + " - " + memberNumber2.value + " - " + memberNumber3.value
    );
    if (checkId() && checkPw1() && checkPw2() && checkName() && checkEmail() && checkBirthday()) {
        alert("회원가입 완료");
    } else {
        alert("입력 미완료")
    }
}


window.onload = function () {
    memberId = document.getElementById("member_id");
    memberPw1 = document.getElementById("member_pw1");
    memberPw2 = document.getElementById("member_pw2");
    memberName = document.getElementById("member_name");
    memberEmail = document.getElementById("member_email");
    memberBirthday = document.getElementById("member_birthday");
    birthM = document.getElementById("birth_m");
    birthD = document.getElementById("birth_d");
    memberSexes = document.getElementsByName("sex");
    memberNumber1 = document.getElementById("member_number1");
    memberNumber2 = document.getElementById("member_number2");
    memberNumber3 = document.getElementById("member_number3");
}




