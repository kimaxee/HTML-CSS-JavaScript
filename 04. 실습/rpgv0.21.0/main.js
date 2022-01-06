var screenMessageBox; //screen_Message_Box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_Player_Info
// var orc = new Monster("오크", 100, 10);
var elf = new Character("엘프", 200, 30);
var turnCount = 1; //턴 기본값 1
var itTurn;
var currentMode = "대기"; //현재 모드 대기, 전투 등
var roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0); //(방 이름, 방 설명, 방 아이디, e, w, n, s, u, d)
var roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
var roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);
var currentRoomId = 1000; //현재 방 아이디
var roomArray = [ //방 배열
  new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0) ,
  new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0) ,
  new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,1003,1004,1005,1006),
  new Room("연습장 남쪽","연습장 남쪽이다.",1003,0,0,0,1002,0,0),
  new Room("연습장 북쪽","연습장 북쪽이다.",1004,0,0,1002,0,0,0),
  new Room("연습장 누각","연습장 누각이다.",1005,0,0,0,0,0,1002),
  new Room("연습장 지하","연습장 지하다.",1006,0,0,0,0,1002,0)
];

var monsterArray = [ //몬스터 배열
  new Monster("허수아비", 100, 1, 1001, "N"), // (name, hp, attack, location)
  new Monster("허수아비", 100, 1, 1002, "N"),
  new Monster("허수아비", 100, 1, 1003, "N"),
  new Monster("허수아비", 100, 1, 1004, "N"),
  
  new Monster("쥐", 50, 3, 1005, "H"),
  new Monster("쥐", 50, 3, 1006, "H"),
  new Monster("왕쥐", 100, 5, 1006, "H"),
];

window.onload = function () {
  screenMessageBox = document.getElementById("screen_Message_Box");
  screenGameObject = document.getElementById("screen_game_object");
  screenPlayerInfo = document.getElementById("screen_Player_Info");
  itTurn = document.getElementById("input_txt_turn")
  
  characterInfo();
  displayRoomInfo();
}
