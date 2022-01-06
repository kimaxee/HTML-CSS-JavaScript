/* 골드 보상  */
function getReward() {
  elf.gold = elf.gold + orc.gold;
  tv(orc.gold + "골드를 얻었습니다.\n")
}

/* 공격력 (랜덤) 0~공격력 값 랜덤 */
function getRandomAttackValue(attack) {
  attack = attack + 1;
  var random = Math.floor(Math.random() * attack);
  return random;
}
/* 전투 종료 */
function endBattle() {
  tv("\n전투 종료\n");
  elf.currentExp = elf.currentExp + orc.exp;
  tv(orc.name + "가 " + elf.name + "에게 경험치 " + orc.exp + "을 주고 죽었습니다.\n")
  getReward();
  currentMode = "대기"
  tvGameObjectClear();
}


/* 전투시 정보 */
function procBattleTurn() {

  var monsterAttack = getRandomAttackValue(orc.attack);
  var characterAttack = getRandomAttackValue(elf.attack);

  orc.currentHp = orc.currentHp - characterAttack;
  tv(orc.name + "가 " + elf.name + "에게 " + characterAttack + "의 피해를 받았습니다.\n")
  elf.currentHp = elf.currentHp - monsterAttack;
  tv(elf.name + "가 " + orc.name + "에게 " + monsterAttack + "의 피해를 받았습니다.\n")

  /* 체력이 0이 되거나 아닐때 출력되는 값들 */
  if (orc.currentHp <= 0 || elf.currentHp <= 0) {
    characterInfo();
    endBattle();
    return false;
  }
  else {
    characterInfo();
    return true;
  }
}

/* 턴 */
function turn() {
  if (currentMode == "전투") {
    procBattleTurn();
  } else {
    procNormalTurn();
  }
  turnCount++;
  itTurn.value = turnCount;
  console.log("현재 턴 : " + turnCount);
}

/* 비전투시 정보 */
function procNormalTurn() {
  tv("특별한 것은 보이지 않는다.\n");
}
/* 이동(방향) ex) 동 서 남 북 위 밑 */
function move(direction) {
  var nowRoom = getCurrentRoomObject();
  var connectionRoomId = nowRoom.getIdByDirection(direction);
  if (connectionRoomId == 0) {  //연결방 아이디가 0값이면 갈수없음
    tv("갈수없음\n");
    return;
  } else {
    currentRoomId = connectionRoomId; //현재방 아이디와 연결방 아이디가 같으면 
    console.log("현재 방번호 : " + currentRoomId); //디버그 콘솔창에 현재방 아이디 출력
  }

  switch (direction) {
    case "동":
      tv("동쪽으로 이동했습니다.\n");
      break;
    case "서":
      tv("서쪽으로 이동했습니다.\n");
      break;
    case "남":
      tv("남쪽으로 이동했습니다.\n");
      break;
    case "북":
      tv("북쪽으로 이동했습니다.\n");
      break;
    case "위":
      tv("위쪽으로 이동했습니다.\n");
      break;
    case "밑":
      tv("아래쪽으로 이동했습니다.\n");
      break;
  }
  /* 이동 후 할일들 */
  displayRoomInfo(); //방 정보 보여주기
  procCurrentRoomMonster(); //현재 방의 몬스터들의 처리
  turn();//턴 진행
}
/* 현재 방 오브젝트 */
function getCurrentRoomObject() {
  for (var i = 0; i < roomArray.length; i++) { //i = 룸 갯수만큼..
    if (roomArray[i].id == currentRoomId) {
      return roomArray[i];
    }
  }
}
/* 현재 방 몬스터 정보 */
function getCurrentRoomMonsters() {
  var currentRoomMonsters = new Array();
  for (var i = 0; i < monsterArray.length; i++) {
    if (monsterArray[i].location == currentRoomId) {
      currentRoomMonsters.push(monsterArray[i]);
    }
  }
  return currentRoomMonsters;
}
/* 현재 방의 몬스터들의 처리 */
function procCurrentRoomMonster() {
  var monsterArray = getCurrentRoomMonsters();    //현재 방의 몬스터 리스트 가져오기
  for (var i = 0; i < monsterArray.length; i++) { //이 몬스터들의 공격성 검사
    if (monsterArray[i].aggressionType == "H") {  // 공격성이 적대적(H) 인 몹이 있으면
      // currentMode = "전투";   // 현재 모드를 전투로 바꾸어 이후 턴 처리가 전투 턴이 진행 되도록 함
      console.log("적대적인 몹이 있음");
    }
  }
}