function characterInfo() {
  elf.info();
  orc.info();
  tv("\n");
}

/* 골드  */
function getReward() {
  elf.gold = elf.gold + orc.gold;
  tv(orc.gold + "골드를 얻었습니다.\n")
}

/* 공격력 (랜덤) */
function getRandomAttackValue(attack) {
  attack = attack + 1;
  var random = Math.floor(Math.random() * attack);
  return random;
}

function endBattle() {
  tv("\n전투 종료\n");
  elf.currentExp = elf.currentExp + orc.exp;
  tv(orc.name + "가 " + elf.name + "에게 경험치 " + orc.exp + "을 주고 죽었습니다.\n")
  getReward();
  currentMode = "대기"
  tvGameObjectClear();
}


/* 전투 정보 */
function procBattleTurn() {

  var monsterAttack = getRandomAttackValue(orc.attack);
  var characterAttack = getRandomAttackValue(elf.attack);

  orc.currentHp = orc.currentHp - characterAttack;
  tv(orc.name + "가 " + elf.name + "에게 " + characterAttack + "의 피해를 받았습니다.\n")
  elf.currentHp = elf.currentHp - monsterAttack;
  tv(elf.name + "가 " + orc.name + "에게 " + monsterAttack + "의 피해를 받았습니다.\n")

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

function procNormalTurn() {
  tvClear();
  tv("전투 종료")
}

function screenMessageBoxScrollToBot() {
  screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}
