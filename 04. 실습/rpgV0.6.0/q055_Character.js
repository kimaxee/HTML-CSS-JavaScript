function Character(name, hp, attack) {
    this.name = name; // 이름
    this.currentHp = hp; // 현재체력
    this.maxHp = hp; //최대체력
    this.attack = attack; //공격력

    this.info = function() {
        dw(" [" + this.name + "(" + this.currentHp + "/" + this.maxHp + ")]");
    }
}
