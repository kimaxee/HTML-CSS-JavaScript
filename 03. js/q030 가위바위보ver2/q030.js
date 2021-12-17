/* 가위바위보 */
// v0.02 //


var player = ""
var computer = Math.floor(Math.random() * 3) + 1


while (true) {
  player = prompt("가위 바위 보를 입력하세요 \n종료 : 나가기");
  if (player == "가위" || player == "바위" || player == "보") {
    computer = Math.floor(Math.random() * 3) + 1;
    switch (player) {

      case "가위":
        if (3 == computer) {
          alert("'무승부' \n컴퓨터 : 보 \n플레이어 : 가위");
        }

        else if (2 <= computer) {
          alert("'패배' \n컴퓨터 : 바위 \n플레이어 : 가위");
        }

        else {
          alert("'승리' \n컴퓨터 : 가위 \n플레이어 : 가위");
        }
        break;

      case "바위":
        if (3 == computer) {
          alert("'무승부' \n컴퓨터 : 가위 \n플레이어 : 바위");
        }

        else if (2 <= computer) {
          alert("'패배' \n컴퓨터 : 보 \n플레이어 : 바위");
        }

        else {
          alert("'승리' \n컴퓨터 : 바위 \n플레이어 : 바위");
        }
        break;

      case "보":
        if (3 == computer) {
          alert("'무승부' \n컴퓨터 : 바위 \n플레이어 : 보");
        }

        else if (2 <= computer) {
          alert("'패배' \n컴퓨터 : 가위 \n플레이어 : 보");
        }

        else {
          alert("'승리' \n컴퓨터 : 보 \n플레이어 : 보");
        }
        break;
    }
  }
  else if (player == "나가기") {
    alert("'수고하셨습니다'");
    break;
  }
  else {
    alert("'잘못 입력하셨습니다'");
  }

}
