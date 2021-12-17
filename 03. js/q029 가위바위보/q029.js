var player = "";
var computer = 0;


while (true) {
  player = prompt("가위, 바위, 보를 입력하세요" + "\n종료 : 나가기")
  computer = Math.floor(Math.random() * 3) + 1
  if (player == "가위" || player == "바위" || player == "보") {
    switch (player) {
      case "가위":
        if (3 == computer) {
          alert("컴퓨터 : 가위 \n플레이어 : 무승부")
        }

        else if (2 <= computer) {
          alert("컴퓨터 : 바위 \n플레이어 : 패배");
        }

        else {
          alert("컴퓨터 : 보 \n플레이어 : 승리");
        }
        break;

      case "바위":
        if (3 == computer) {
          alert("컴퓨터 : 바위 \n플레이어 : 무승부")
        }

        else if (2 <= computer) {
          alert("컴퓨터 : 보 \n플레이어 : 패배");
        }

        else {
          alert("컴퓨터 : 가위 \n플레이어 : 승리");
        }
        break;

      case "보":
        if (3 == computer) {
          alert("컴퓨터 : 보 \n플레이어 : 무승부")
        }

        else if (2 <= computer) {
          alert("컴퓨터 : 가위 \n플레이어 : 패배");
        }

        else {
          alert("컴퓨터 : 바위 \n플레이어 : 승리");
        }
        break;
    }
  }

  else if (player == "나가기") {
    dw("수고하셨습니다");
    break;
  }
  else {
    alert("잘못 입력했습니다");
  }
}

