var random;
random = Math.floor(Math.random() * 6) + 1;

var a = prompt("1~6 사이의 숫자를 입력하세요");
switch (random) {
    case "1":
        document.write("<img class=dice src='dice6_1.jpg'>")
        break;
    case "2":
        document.write("<img class=dice src='dice6_2.jpg'>")
        break;
    case "3":
        document.write("<img class=dice src='dice6_3.jpg'>")
        break;
    case 4:
        document.write("<img class=dice src='dice6_4.jpg'>")
        break;
    case 5:
        document.write("<img class=dice src='dice6_5.jpg'>")
        break;
    case 6:
        document.write("<img class=dice src='dice6_6.jpg'>")
        break;
    default:
        alert("잘못 입력하셨습니다");
}

