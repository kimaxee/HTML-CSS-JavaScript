/*************************************
V0.2.0
문51 기능 추가

-전투 시작 메세지 출력
단순하게 출력
hr();	
"전투시작"	
hr();

- 전투 처리 ( 한 턴 <한차례의 서로간의 공격> )
오크와 엘프 간 전투 처리 
(서로 한번씩만 때려 피해를 입히는 처리)				
상대의 공격력(attack) 수치 만큼 
hp(체력) 에 피해 ( 마이너스 ) 처리
각 객체의 info 를 호출하여 현재 정보 출력
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
dw("전투시작");
hr();
br();

orc.hp = orc.hp - elf.attack;
elf.hp = elf.hp - orc.attack;

orc.info();
elf.info();