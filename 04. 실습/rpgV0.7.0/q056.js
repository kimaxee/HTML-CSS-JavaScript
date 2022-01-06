var orc = new Monster("오크", 1000, 100);
var elf = new Character("엘프", 800, 150, 100);

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

function getCharacterExpValue(currentExp) {
  return currentExp = 50;
}


function battleCharacterInfo() {

  var monsterAttack = 0;
  var characterAttack = 0;
  var getExp = 0;
  var lossExp = 0;
  
  while (true) {
    monsterAttack = getRandomAttackValue(orc.attack);
    characterAttack = getRandomAttackValue(elf.attack);
    getExp = getCharacterExpValue(elf.currentExp);
    orc.currentHp = orc.currentHp - characterAttack;
    elf.currentHp = elf.currentHp - monsterAttack;
    
    if (orc.currentHp <= 0) {
      dw(orc.name + "가 " + characterAttack + "의 피해를 받았습니다.<br>")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.<br>")
      orc.info();
      elf.info();br();
      dw("<hr>" + orc.name + "가 죽었습니다");  
      dw("<hr><hr>★ 전투종료 ★<hr> " + elf.name + "가 경험치 " + getExp + "만큼 획득했습니다.");
      br();
      elf.currentExp = elf.currentExp + getExp;
      elf.info();
      break;
    }
    if (elf.currentHp <= 0) {
      dw(orc.name + "가 " + characterAttack + "의 피해를 받았습니다.<br>")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.<br>")
      orc.info();
      elf.info();br();
      dw("<hr>" + elf.name + "가 죽었습니다");
      dw("<hr><hr>★ 전투종료 ★ " + elf.name + "가 경험치 " + getExp + "만큼 잃었습니다.");
      br();
      elf.currentExp = elf.currentExp - getExp;
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