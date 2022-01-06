var screenMessageBox;
var screenGameObject;
var screenPlayerInfo;
var orc = new Monster("오크", 100, 10);
var elf = new Character("엘프", 200, 30);
var turnCount = 0;
var itTurn;
var currentMode = "전투";

window.onload = function () {
  screenMessageBox = document.getElementById("screen_Message_Box");
  screenGameObject = document.getElementById("screen_game_object");
  screenPlayerInfo = document.getElementById("screen_Player_Info");
  itTurn = document.getElementById("input_txt_turn")
  characterInfo();
  tv("전투 시작\n");
}
