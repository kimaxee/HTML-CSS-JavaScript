/*************************************
문47 클래스 

문46의 키티에 나머지 값들도
넣어주시고 각각 다 출력
*************************************/

function Cat() {
    /*속성 또는 프로퍼티들*/
    this.name = ""; // 이름
    this.age = 0; // 나이
    this.weight = 0; // 몸무게
    this.family = ""; // 종류
    this.color = ""; // 털색
}

new Cat();
var kitty = new Cat();
kitty.name = "키티";
kitty.age = 1;
kitty.weight = 200;
kitty.family = "페르시아";
kitty.color = "갈색";

dw("이름 : " + kitty.name); hr();
dw("나이 : " + kitty.age); hr();
dw("몸무게 : " + kitty.weight); hr();
dw("종류 : " + kitty.family); hr();
dw("털색 : " + kitty.color); hr();
