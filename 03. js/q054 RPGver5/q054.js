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



