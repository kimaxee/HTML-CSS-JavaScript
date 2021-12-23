/*************************************
V0.7.0
문56 업데이트

- 전투 종료 처리(종료메세지 출력, 경험치 획득)		
- 플레이어 간략 정보 표시에 현재 경험치/다음 레벨업 
  필요 경험치 표시 추가 
  ex. [엠피스(70/100)](exp: 100/300)					
  (레벨업 경험치 기획은 현재 미정. 300값 하드코딩.)					
- 전투 종료 후 얻은 경험치가 표시에 반영 되도록
  케릭터 간략 정보 출력 처리 함수 위치 수정		

테스트	
- 적 전투력 높혀서 플레이어도 잘 죽는지 확인					
*************************************/

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