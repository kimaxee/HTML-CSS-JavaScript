var myLotto = [2, 6, 10, 26, 34, 37]
var comLotto = new Array(6);

var winCount = 0;



for (var i = 0; i < comLotto.length; i++) { 
    comLotto[i] = Math.floor(Math.random() * 45 + 1);
}

for (var i = 0; i < comLotto.length; i++) {
    for (var j = 0; j < myLotto.length; j++) {
        if (comLotto[i] == myLotto[j]) {
            winCount++;
        }
    }
}

dw("컴 번호 : ")
for (var i = 0; i < comLotto.length; i++) {
    dw(comLotto[i] + " ")
}

br();

dw("내 번호 : ")
for (var i = 0; i < myLotto.length; i++) {
    dw(myLotto[i] + " ")
}

br();

dw(winCount + "개 일치");
