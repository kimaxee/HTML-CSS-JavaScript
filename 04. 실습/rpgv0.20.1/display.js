/*
    화면 출력용 함수들을 모아놓음
*/

/* textarea 의 value 에 텍스트 입력 처리하는 함수 (줄여서 tv 로 함) - 메세지 창 쪽 */
function tv(str) {
    var screenString = screenMessageBox.value; //선언하다.화면문자열(은)=화면메세지박스의 값;
    screenString = screenString + str; //화면문자열은 화면문자열+문자열(줄임말 str)
    screenMessageBox.value = screenString; //화면메세지박스의 값은 화면문자열이다.

    screenMessageBoxScrollToBot(); //화면메세지박스 스크롤을 하단으로
}

function screenMessageBoxScrollToBot() { //화면메세지박스 스크롤을 하단으로
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight; //화면메세지박스의 스크롤상단은 화면메세지박스의 스크롤높이
}

function tvClear() { //메세지창 지우기
    screenMessageBox.value = "";
}

function tvPlayerInfo(str) { //플레이어 정보 출력
    var screenString = screenPlayerInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value = screenString;
    screenPlayerInfo.value = str;
}

function tvPlayerInfoClear() { //플레이어 정보창 지우기
    screenPlayerInfo.value = "";
}

function tvGameObject(str) {
    var screenString = screenGameObject.value;
    screenString = screenString + str;
    screenGameObject.value = screenString;
    screenGameObject.value = str;
}

function tvGameObjectClear() {
    screenGameObject.value = "";
}
/* 캐릭터 정보 */
function characterInfo() {
    elf.info(); //엘프 정보 불러오기
}
function displayRoomInfo() { //방 정보 출력
    getCurrentRoomObject().displayRoomInfo();
    displayCurrentRoomMonstersInfo();
}
function displayCurrentRoomMonstersInfo() { //현재 방 몬스터 정보 출력
    var currentRoomMonstersArray = getCurrentRoomMonsters();
    var monstersString = "";
    for (var i = 0; i < currentRoomMonstersArray.length; i++) {
        console.log(currentRoomMonstersArray[i].name);
        monstersString = monstersString + currentRoomMonstersArray[i].getInfo();
    }
    tvGameObject(monstersString);
}

function br() {
    document.write("<br>");
}

function hr() {
    document.write("<hr>");
}