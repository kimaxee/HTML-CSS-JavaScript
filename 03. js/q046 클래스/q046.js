/*************************************
문46 클래스 

Cat 클래스 변수 kitty를 만들고 
이 클래스 변수의 속성 catName 변수에 
임의의 값을 넣고(이름 짓기)
위 고양이 이름을 출력하기
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
dw(kitty.name);
