/*************************************
V0.4.0
문53 업데이트

- 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
- 케릭터 정보 표시를 수정하였습니다. 
  ex. [엠피스(70/100)]
- 케릭터 정보 표시에서 공격력 수치를 제거하였습니다.	
*************************************/


function Monster(name, hp, attack) {
    this.name = name; // 이름
    this.currentHp = hp; // 현재체력
    this.maxHp = hp; //최대체력
    this.attack = attack; //공격력

    this.info = function () {
        dw("<hr>" + "[" + this.name + "] " + "[현재체력 : " + this.currentHp + " / 최대체력 : " + this.maxHp + "]");
        hr();
    }

}

function Character(name, hp, attack) {
    this.name = name; // 이름
    this.currentHp = hp; // 현재체력
    this.maxHp = hp; //최대체력
    this.attack = attack; //공격력

    this.info = function() {
        dw("<hr>" + "[" + this.name + "] " + "[현재체력 : " + this.currentHp + " / 최대체력 : " + this.maxHp + "]");
        hr();
    }
}

var orc = new Monster("오크", 1000, 100);
var elf = new Character("엘프", 800, 150);

orc.info();
elf.info();
br();
hr();
dw("첫 번째 전투시작");
hr();


orc.currentHp = orc.maxHp - elf.attack;
elf.currentHp = elf.maxHp - orc.attack;

orc.info();
elf.info();

br();
hr();
dw("두 번째 전투시작");
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



