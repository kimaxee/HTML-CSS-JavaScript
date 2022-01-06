var screenMessageBox;
var screenGameObject;
var screenPlayerInfo;
var orc = new Monster("오크", 100, 10);
var elf = new Character("엘프", 200, 30);
var turnCount = 1;
var itTurn;
var currentMode = "대기";
var roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);
var roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
var roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);
var currentRoomId = 1000;
var roomArray = [
  new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0) ,
  new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0) ,
  new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0)
];

window.onload = function () {
  screenMessageBox = document.getElementById("screen_Message_Box");
  screenGameObject = document.getElementById("screen_game_object");
  screenPlayerInfo = document.getElementById("screen_Player_Info");
  itTurn = document.getElementById("input_txt_turn")
  
  characterInfo();
  displayRoomInfo();
}
