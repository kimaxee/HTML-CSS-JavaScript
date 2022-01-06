function Monster(name, hp, attack) {
    this.name = name; // 이름
    this.currentHp = hp; // 현재체력
    this.maxHp = hp; // 최대체력
    this.attack = attack; // 공격력
    this.exp = 100; // 경험치
    this.gold = 10; // 골드

    this.info = function () {
        tvGameObject(" [" + this.name + "(" + this.currentHp + "/" + this.maxHp + ")]");
    }
}
