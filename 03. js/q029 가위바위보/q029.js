var player = "";
while (true) {
    player = prompt("가위, 바위, 보를 입력하세요")
    if (player == "가위" || player == "바위" || player == "보") {
        break;
    }
    else {
        alert("잘못 입력했습니다");
    }
}
var computer = Math.floor(Math.random() * 3) + 1

switch (player) {
    case "가위":
        if (3 == computer) {
            alert("컴퓨터 : 가위 \n플레이어 : 무승부")
            Scissors();
        }
        
        else if (2 <= computer) {
            alert("컴퓨터 : 바위 \n플레이어 : 패배");
            Rock();
        }
        
        else {
            alert("컴퓨터 : 보 \n플레이어 : 승리");
            Paper();
        }
        break;

    case "바위":
        if (3 == computer) {
            alert("컴퓨터 : 바위 \n플레이어 : 무승부")
            Rock();
        }
        
        else if (2 <= computer) {
            alert("컴퓨터 : 보 \n플레이어 : 패배");
            Paper();
        }
        
        else {
            alert("컴퓨터 : 가위 \n플레이어 : 승리");
            Scissors();
        }
        break;

    case "보":
        if (3 == computer) {
            alert("컴퓨터 : 보 \n플레이어 : 무승부")
            Paper();
        }
        
        else if (2 <= computer) {
            alert("컴퓨터 : 가위 \n플레이어 : 패배");
            Scissors();
        }
        
        else {
            alert("컴퓨터 : 바위 \n플레이어 : 승리");
            Rock();
        }
        break;
}
