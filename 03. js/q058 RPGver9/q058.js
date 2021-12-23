function characterInfo() {
  orc.info();
  elf.info();
  dw("\n★ 전투시작 ★");
}

/* 공격력 (랜덤) */
function getRandomAttackValue(attack) {
  attack = attack + 1;
  var random = Math.floor(Math.random() * attack);
  return random;
}

/* 골드 (랜덤) */
function getRandomGoldValue(gold) {
  gold = gold + 1;
  var random = Math.floor(Math.random() * gold);
  return random;
}

/* 전투 정보 */
function battleCharacterInfo() {

  var monsterAttack = 0;
  var characterAttack = 0;
  var monsterRewardGold = 0;

  while (true) {

    monsterAttack = getRandomAttackValue(orc.attack);
    characterAttack = getRandomAttackValue(elf.attack);
    monsterRewardGold = getRandomGoldValue(orc.gold);
    orc.currentHp = orc.currentHp - characterAttack;
    elf.currentHp = elf.currentHp - monsterAttack;

    if (orc.currentHp <= 0) {
      dw("\n" + orc.name + "가 " + characterAttack + "의 피해를 받았습니다.\n")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.\n")
      orc.info();
      elf.info(); 
      dw("\n" + orc.name + "가 죽었습니다");
      dw("\n★ 전투종료 ★\n" + elf.name + "가 경험치 " + orc.exp + "만큼 획득했습니다.\n");
      dw(elf.name + "가 " + monsterRewardGold + "Gold를 획득했습니다\n");
      
      elf.currentExp = elf.currentExp + orc.exp;
      elf.gold = elf.gold + monsterRewardGold;
      elf.info();
      break;
    }
    if (elf.currentHp <= 0) {
      dw("\n" + orc.name + "가 " + characterAttack + "의 피해를 받았습니다.\n")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.\n")
      orc.info();
      elf.info(); 
      dw("\n" + elf.name + "가 죽었습니다");
      dw("\n★ 전투종료 ★\n" + elf.name + "가 경험치 " + orc.exp + "만큼 잃었습니다.\n");
      dw(elf.name + "가 " + monsterRewardGold + "Gold를 잃었습니다\n");
      
      elf.currentExp = elf.currentExp - orc.exp;
      elf.gold = elf.gold - monsterRewardGold;
      elf.info();
      break;
    }
    if (orc.currentHp > 0) {
      dw("\n" + orc.name + "가 " + characterAttack + "의 피해를 받았습니다.\n")
    }
    if (elf.currentHp > 0) {
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.\n")
    }
    orc.info();
    elf.info();
  }
}


var rpgResultScreen;
var orc = new Monster("오크", 1000, 100, 50, 50);
var elf = new Character("엘프", 800, 150, 100, 100, 300);

window.onload = function () {
  rpgResultScreen = document.getElementById("rpg_Result_Screen");
  characterInfo();
  battleCharacterInfo();
}
