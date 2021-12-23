/*************************************
V0.5.0
문54 업데이트

- 케릭터 정보 출력을 한꺼번에 출력되도록 수정하였습니다.
  ex [엠피스(50/100)] [오크전사(30/100)]
- 업데이트 내용 주석을 별도의 
  version_info.txt 로 옮겼습니다.
- 클래스 선언을 별도의 파일로 옮기고 연결했습니다.
*************************************/

var orc = new Monster("오크", 1000, 100);
var elf = new Character("엘프", 800, 150);

orc.info();
elf.info();
hr(); hr();
dw("★ 첫 번째 전투시작 ★");


orc.currentHp = orc.maxHp - elf.attack;
elf.currentHp = elf.maxHp - orc.attack;

orc.info();
elf.info();

hr();
dw("★ 두 번째 전투시작 ★");
hr();



function getRandomAttackValue(attack) {
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}

var monsterAttack = getRandomAttackValue(orc.attack);
var characterAttack = getRandomAttackValue(elf.attack);


orc.currentHp = orc.currentHp - characterAttack;
elf.currentHp = elf.currentHp - monsterAttack;

dw("엘프가 " + characterAttack + "의 피해를 입혔습니다.<br>")
dw("오크가 " + monsterAttack + "의 피해를 입혔습니다.")

orc.info();
elf.info();



