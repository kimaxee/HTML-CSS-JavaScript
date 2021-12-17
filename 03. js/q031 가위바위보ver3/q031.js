var record;
var rate;
var win = 0;
var loss = 0;
var draw = 0;

function btn_click() {

    var comPlay = Math.floor(Math.random() * 3)
    var userPlay = document.getElementById("userAction").value;
    var result;
    var displayComAction;

    const playNumber = { 가위: 0, 바위: 1, 보: 2 };

    if (comPlay == 0) {
        displayComAction = "컴퓨터는 가위";
    } else if (comPlay == 1) {
        displayComAction = "컴퓨터는 바위";
    } else if (comPlay == 2) {
        displayComAction = "컴퓨터는 보";
    }

    if (comPlay == playNumber[userPlay] % 3) {
        result = "무승부";
        draw++;
    } else if (comPlay == (playNumber[userPlay] + 1) % 3) {
        result = "패";
        loss++;
    } else if (comPlay == (playNumber[userPlay] + 2) % 3) {
        result = "승";
        win++;
    }

    record = win + "승 " + draw + "무 " + loss + "패";
    rate = win / (win + loss) * 100 + "%"

    document.getElementById('comAction').value = displayComAction;
    document.getElementById('result').value = result;
    document.getElementById('record').value = record;
    document.getElementById('rate').value = rate;
}