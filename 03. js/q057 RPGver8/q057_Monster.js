function Monster(name, hp, attack, exp, gold) {
    this.name = name; // 이름
    this.currentHp = hp; // 현재체력
    this.maxHp = hp; // 최대체력
    this.attack = attack; // 공격력
    this.exp = exp; // 경험치
    this.gold = gold; // 골드

    this.info = function () {
        dw(" [" + this.name + "(" + this.currentHp + "/" + this.maxHp + ")](exp : " + this.exp + ")(gold : " + this.gold + ")<br>");
    }
}
