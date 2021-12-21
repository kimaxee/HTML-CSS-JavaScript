var comLotto = new Array();
var myLotto = [2, 6, 10, 26, 34, 37];

for (var i = 0; i < 6; i++) {
  comLotto[i] = Math.floor(Math.random() * 45 + 1);

  while (comLotto[0] != comLotto[1])
    break; {
    if (comLotto[0] == comLotto[1]) {
      (comLotto[1] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[0] == comLotto[2]) {
      (comLotto[2] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[0] == comLotto[3]) {
      (comLotto[3] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[0] == comLotto[4]) {
      (comLotto[4] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[0] == comLotto[5]) {
      (comLotto[5] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[1] == comLotto[2]) {
      (comLotto[2] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[1] == comLotto[3]) {
      (comLotto[3] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[1] == comLotto[4]) {
      (comLotto[4] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[1] == comLotto[5]) {
      (comLotto[5] = Math.floor(Math.random() * 45 + 1))
    }
    else if (comLotto[2] == comLotto[3]) {
      (comLotto[3] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[2] == comLotto[4]) {
      (comLotto[4] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[2] == comLotto[5]) {
      (comLotto[5] = Math.floor(Math.random() * 45 + 1))
    }
    else if (comLotto[3] == comLotto[4]) {
      (comLotto[4] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[3] == comLotto[5]) {
      (comLotto[5] = Math.floor(Math.random() * 45 + 1))
    }
    else if (comLotto[4] == comLotto[5]) {
      (comLotto[5] = Math.floor(Math.random() * 45 + 1))
    }
    continue;
  }
}

var bonusLotto = new Array();


dw("컴 번호 : ");
for (var i = 0; i < 6; i++) {
  dw(comLotto[i] + " ");
}


for (var i = 0; i < 1; i++) {
  bonusLotto[i] = Math.floor(Math.random() * 45 + 1);

  while (comLotto[0] != bonusLotto[i])
    break; {
    if (comLotto[0] == bonusLotto[i]) {
      (bonusLotto[i] = Math.floor(Math.random() * 45 + 1))
    }

    else if (comLotto[1] == bonusLotto[i]) {
      (bonusLotto[i] = Math.floor(Math.random() * 45 + 1))
    }
    else if (comLotto[2] == bonusLotto[i]) {
      (bonusLotto[i] = Math.floor(Math.random() * 45 + 1))
    }
    else if (comLotto[3] == bonusLotto[i]) {
      (bonusLotto[i] = Math.floor(Math.random() * 45 + 1))
    }
    else if (comLotto[4] == bonusLotto[i]) {
      (bonusLotto[i] = Math.floor(Math.random() * 45 + 1))
    }
    else if (comLotto[5] == bonusLotto[i]) {
      (bonusLotto[i] = Math.floor(Math.random() * 45 + 1))
    }
    continue;
  }
}



dw("+ 보너스 : " + bonusLotto)

br();

dw("내 번호 : ");
for (var j = 0; j < 6; j++) {
  dw(myLotto[j] + " ");
}

var winCount = 0;

if (myLotto[0] == comLotto[0]) {
  winCount++;
}
else if (myLotto[0] == comLotto[1]) {
  winCount++;
}
else if (myLotto[0] == comLotto[2]) {
  winCount++;
}
else if (myLotto[0] == comLotto[3]) {
  winCount++;
}
else if (myLotto[0] == comLotto[4]) {
  winCount++;
}
else if (myLotto[0] == comLotto[5]) {
  winCount++;
}


if (myLotto[1] == comLotto[0]) {
  winCount++;
}
else if (myLotto[1] == comLotto[1]) {
  winCount++;
}
else if (myLotto[1] == comLotto[2]) {
  winCount++;
}
else if (myLotto[1] == comLotto[3]) {
  winCount++;
}
else if (myLotto[1] == comLotto[4]) {
  winCount++;
}
else if (myLotto[1] == comLotto[5]) {
  winCount++;
}


if (myLotto[2] == comLotto[0]) {
  winCount++;
}
else if (myLotto[2] == comLotto[1]) {
  winCount++;
}
else if (myLotto[2] == comLotto[2]) {
  winCount++;
}
else if (myLotto[2] == comLotto[3]) {
  winCount++;
}
else if (myLotto[2] == comLotto[4]) {
  winCount++;
}
else if (myLotto[2] == comLotto[5]) {
  winCount++;
}


if (myLotto[3] == comLotto[0]) {
  winCount++;
}
else if (myLotto[3] == comLotto[1]) {
  winCount++;
}
else if (myLotto[3] == comLotto[2]) {
  winCount++;
}
else if (myLotto[3] == comLotto[3]) {
  winCount++;
}
else if (myLotto[3] == comLotto[4]) {
  winCount++;
}
else if (myLotto[3] == comLotto[5]) {
  winCount++;
}


if (myLotto[4] == comLotto[0]) {
  winCount++;
}
else if (myLotto[4] == comLotto[1]) {
  winCount++;
}
else if (myLotto[4] == comLotto[2]) {
  winCount++;
}
else if (myLotto[4] == comLotto[3]) {
  winCount++;
}
else if (myLotto[4] == comLotto[4]) {
  winCount++;
}
else if (myLotto[4] == comLotto[5]) {
  winCount++;
}


if (myLotto[5] == comLotto[0]) {
  winCount++;
}
else if (myLotto[5] == comLotto[1]) {
  winCount++;
}
else if (myLotto[5] == comLotto[2]) {
  winCount++;
}
else if (myLotto[5] == comLotto[3]) {
  winCount++;
}
else if (myLotto[5] == comLotto[4]) {
  winCount++;
}
else if (myLotto[5] == comLotto[5]) {
  winCount++;
}

var ranking = "";

switch (winCount) {
  case 3: ranking = "5등 ";
    break;
  case 4: ranking = "4등 ";
    break;
  case 5: ranking = "3등 ";
    if (myLotto[j] == bonusLotto[i]) {
      ranking = "2등 ";
    }
    break;
  case 6: ranking = "1등 ";
    break;
  default: ranking = "꽝 ";
}


br();
dw(winCount + "개 일치");
br();
dw(ranking + "입니다");


