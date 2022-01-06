function Character(name, hp, attack) {
    this.name = name; // 이름
    this.currentHp = hp; // 현재체력
    this.maxHp = hp; // 최대체력
    this.attack = attack; // 공격력
    this.currentExp = 0; // 현재경험치
    this.gold = 0; // 골드

    this.info = function () {
        tvPlayerInfo("[" + this.name + "(" + this.currentHp + "/" + this.maxHp + ")](exp : " + this.currentExp + "/300)(gold : " + this.gold + ")");
    }
}
