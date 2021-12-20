var myLotto = [2, 6, 10, 26, 34, 37]
var comLotto = new Array(6);




dw("컴 번호 : ");
for (var i = 0; i < comLotto.length; i++) { //배열 수 만큼 반복
    comLotto[i] = Math.floor(Math.random() * 45 + 1);
    dw(comLotto[i] + " ");
}

br()

dw("내 번호 : ");

for (var j = 0; j < myLotto.length; j++) {
    dw(myLotto[j] + " ")
}

br();

var winCount = 0;

if (myLotto[0]==comLotto[i]){
    winCount++;
    dw("당첨")
}
