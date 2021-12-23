/*************************************
V0.8.0
문57 업데이트

- 전투 종료 후 경험치 획득 메세지 출력
  ex. 불쌍한 토끼, 엠피스에게
  경험치 100 을 주고 죽었습니다.
- 보상 추가. 몬스터 사냥 시 돈도 획득하도록
  변경되었습니다.
*************************************/

var orc = new Monster("오크", 1000, 100, 50, 50);
var elf = new Character("엘프", 800, 150, 100, 100, 300);

function characterInfo () {
   
  orc.info();
  elf.info();
  hr(); hr();
  dw("★ 전투시작 ★");
  hr(); hr();
}

characterInfo();

battleCharacterInfo();



function getRandomAttackValue(attack) {
  attack = attack + 1;
  var random = Math.floor(Math.random() * attack);
  return random;
}
function getRandomGoldValue(gold) {
  gold = gold + 1;
  var random = Math.floor(Math.random() * gold);
  return random;
}



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
      dw(orc.name + "가 " + characterAttack + "의 피해를 받았습니다.<br>")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.<br>")
      orc.info();
      elf.info();br();
      dw("<hr>" + orc.name + "가 죽었습니다");  
      dw("<hr><hr>★ 전투종료 ★<hr> " + elf.name + "가 경험치 " + orc.exp + "만큼 획득했습니다.");
      br();
      dw(elf.name + "가 " + monsterRewardGold + "Gold를 획득했습니다");
      br();
      elf.currentExp = elf.currentExp + orc.exp;
      elf.gold = elf.gold + monsterRewardGold;
      elf.info();
      break;
    }
    if (elf.currentHp <= 0) {
      dw(orc.name + "가 " + characterAttack + "의 피해를 받았습니다.<br>")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.<br>")
      orc.info();
      elf.info();br();
      dw("<hr>" + elf.name + "가 죽었습니다");
      dw("<hr><hr>★ 전투종료 ★<hr> " + elf.name + "가 경험치 " + orc.exp + "만큼 잃었습니다.");
      br();
      dw(elf.name + "가 " + monsterRewardGold + "Gold를 잃었습니다");
      br();
      elf.currentExp = elf.currentExp - orc.exp;
      elf.gold = elf.gold - monsterRewardGold;
      elf.info();
      break;
    }
    if (orc.currentHp > 0) {
      dw(orc.name + "가 " + characterAttack + "의 피해를 받았습니다.<br>")
    }
        
    if (elf.currentHp > 0) {
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.<br>")
    }
    orc.info();
    elf.info();
    hr();
  }
}