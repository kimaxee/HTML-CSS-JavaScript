/*************************************
문49 클래스 
클래스탭을 참고	

문48 복사 코드 추가			
Cat 클래스에 crying() 추가			
crying()는 고양이 소리를 
출력( document.write )하는 함수로 작성		
객체 하나 만들고 이 객체의	
crying() 호출(실행)						
*************************************/


function Cat(name,age,weight,family,color) { 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.age = age;    // 나이
    this.weight = weight; // 몸무게
    this.family = family;    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
    this.color = color;     // 털색

    this.crying = function () {
        dw("야옹");
    }
}

new Cat();
var kitty = new Cat();
kitty.name = "키티";
kitty.age = 1;
kitty.weight = 200;
kitty.family = "페르시아";
kitty.color = "갈색";

var yaongi = new Cat("야옹이",2,300,"코리안숏컷","검정색");

dw("이름 : " + kitty.name); hr();
dw("나이 : " + kitty.age); hr();
dw("몸무게 : " + kitty.weight); hr();
dw("종류 : " + kitty.family); hr();
dw("털색 : " + kitty.color); hr(); 
kitty.crying(); hr(); hr();

dw("이름 : " + yaongi.name); hr();
dw("나이 : " + yaongi.age); hr();
dw("몸무게 : " + yaongi.weight); hr();
dw("종류 : " + yaongi.family); hr();
dw("털색 : " + yaongi.color); hr(); 
yaongi.crying(); yaongi.crying(); hr(); hr();

if (kitty.age > yaongi.age) {
    dw("형님 고양이 : " + kitty.name); br();
    dw("동생 고양이 : " + yaongi.name);    
}
else if (kitty.age < yaongi.age) {
    dw("형님 고양이 : " + yaongi.name); br();
    dw("동생 고양이 : " + kitty.name);    
}
else { 
    (kitty.age == yaongi.age); br();
    dw("둘은 친구임");    
}


