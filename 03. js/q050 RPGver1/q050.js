/*************************************
문50 클래스 
클래스탭을 참고	

1. 클래스생성 >> 클래스 속성 함수 
2. 객체생성(임의의 데이터로 바로 입력하면서<생성자활용> 생성하기)	

몬스터 
name	이름	    info()	각 속성 값들을	orc	임의로..		
hp      체력		출력하는 함수				
attack	공격력						
                        	
캐릭터
name	이름	    nfo()	각 속성 값들을	elf	임의로..		
hp	    체력		출력하는 함수				
attack	공격력						
*************************************/


function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function () {
        dw("몬스터 이름 : " + name + "<hr>" + "몬스터 체력 : " + hp + "<hr>" + "몬스터 공격력 : " + attack);
        hr(); hr();
    }

}

function Character(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function () {
        dw("캐릭터 이름 : " + name + "<hr>" + "캐릭터 체력 : " + hp + "<hr>" + "캐릭터 공격력 : " + attack);
        hr(); hr();
    }
}

var orc = new Monster("오크", 1000, 100);
orc.info();

var elf = new Character("엘프", 800, 150);
elf.info();
