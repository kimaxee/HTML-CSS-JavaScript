/*************************************
V0.3.0
문52 업데이트

- 공격력을 해당 공격력 수치와 0사이의 값이 
  랜덤으로 나오도록 수정하였습니다.  						

1.다음 함수를 추가	
function getRandomAttackValue(attack) {						
attack = attack + 1;    
//ex. 공격력이 10이라고 하면 
0~10의 수치로 나와야 하므로

var random = Math.floor(Math.random()*attack);  
// ex. 공격력이 11이고 이 랜덤처리를 하면 
랜덤 값은 0~10이 나옴

return random;					
}						

2.공격력으로 상대 체력을 깍는 처리를 하던 부분을 
위 함수를 거친 attack 값으로 처리

- 공격 메세지 출력 추가
( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )					
서로 데미지를 입힐 때 누가 누구에게 
몇의 데미지를 입혔는지를 출력 처리	
*************************************/


function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function () {
        dw("<hr>" + "[" + this.name + "] " + "[체력 : " + this.hp + "] " + "[공격력 : " + this.attack + "]");
        hr();
    }

}

function Character(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw("<hr>" + "[" + this.name + "] " + "[체력 : " + this.hp + "] " + "[공격력 : " + this.attack + "]");
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


orc.hp = orc.hp - elf.attack;
elf.hp = elf.hp - orc.attack;

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


orc.hp = orc.hp - characterAttack;
elf.hp = elf.hp - monsterAttack;

dw("엘프가 " + characterAttack + "의 피해를 입혔습니다.<br>")
dw("오크가 " + monsterAttack + "의 피해를 입혔습니다.")

orc.info();
elf.info();



