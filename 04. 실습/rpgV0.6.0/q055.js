/*************************************
V0.6.0
문55 업데이트

- 전투 처리부분과 케릭터들의 상태 정보를
  출력하는 부분을 하나의 함수로 묶어 처리					
- 전투 무한 루프 처리 : 전투 시 플레이어나
  적의 currentHp 가 0 이하로 될 때까지(죽을때 까지)
  전투 반복 처리					
*************************************/

function characterInfo () {
  
  var orc = new Monster("오크", 1000, 100);
  var elf = new Character("엘프", 800, 150);
  
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



function battleCharacterInfo() {

  var monsterAttack = 0;
  var characterAttack = 0;
  
  while (true) {
    monsterAttack = getRandomAttackValue(orc.attack);
    characterAttack = getRandomAttackValue(elf.attack);
    orc.currentHp = orc.currentHp - characterAttack;
    elf.currentHp = elf.currentHp - monsterAttack;

    if (orc.currentHp <= 0) {
      dw(orc.name + "가 " + characterAttack + "의 피해를 받았습니다.<br>")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.<br>")
      orc.info();
      elf.info();br();
      dw("<hr>" + orc.name + "가 죽었습니다");  
      break;
    }
    if (elf.currentHp <= 0) {
      dw(orc.name + "가 " + characterAttack + "의 피해를 받았습니다.<br>")
      dw(elf.name + "가 " + monsterAttack + "의 피해를 받았습니다.<br>")
      orc.info();
      elf.info();br();
      dw("<hr>" + elf.name + "가 죽었습니다");
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
