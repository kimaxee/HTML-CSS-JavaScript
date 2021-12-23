function Character(name, hp, attack, exp, gold, maxExp) {
    this.name = name; // 이름
    this.currentHp = hp; // 현재체력
    this.maxHp = hp; // 최대체력
    this.attack = attack; // 공격력
    this.currentExp = exp; // 현재경험치
    this.maxExp = maxExp; // 최대경험치
    this.gold = gold; // 골드

    this.info = function () {
        dw(" [" + this.name + "(" + this.currentHp + "/" + this.maxHp + ")](exp : " + this.currentExp + "/" + this.maxExp + ")(gold : " + this.gold + ")");
    }
}
