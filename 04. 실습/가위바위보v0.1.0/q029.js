/* 가위바위보 */
// v0.01 //


var player = prompt("가위, 바위, 보를 입력하세요")
var computer = Math.floor(Math.random() * 3) + 1

switch (player) {
  case "가위":
    if (4 > computer) {
      alert("컴퓨터 : 보 \n플레이어 : 승리");
      Paper();
    }

    else if (1 < computer) {
      alert("컴퓨터 : 바위 \n플레이어 : 패배");
      Rock();
    }

    else {
      alert("컴퓨터 : 가위 \n플레이어 : 무승부")
      Scissors();
    }
    break;

  case "바위":
    if (1 >= computer) {
      alert("컴퓨터 : 가위 \n플레이어 : 승리");
      Scissors();
    }

    else if (1 < computer) {
      alert("컴퓨터 : 보 \n플레이어 : 패배");
      Paper();
    }

    else {
      alert("컴퓨터 : 바위 \n플레이어 : 무승부")
      Rock();
    }
    break;

  case "보":
    if (1 >= computer) {
      alert("컴퓨터 : 바위 \n플레이어 : 승리");
      Rock();
    }

    else if (1 < computer) {
      alert("컴퓨터 : 가위 \n플레이어 : 패배");
      Scissors();
    }

    else {
      alert("컴퓨터 : 보 \n플레이어 : 무승부")
      Paper();
    }
    break;
  default:
    alert("잘못 입력하셨습니다");
}
