/*************************************
문41 로또 보너스 번호의 처리		

* 보너스번호? *	
추첨하는 번호는 6개 뿐만 아니라 
1개의 보너스 번호도 추가로 추첨함.

내가 산 로또 번호가 5개가 일치하면 3등인데 
나머지 하나가 이 보너스 번호와 일치할 경우 2등이 됨.					
보너스 번호는 3등(번호 5개 당첨자)만 
2등 여부를 확인하는데 쓰는 번호로 
5개 미만 당첨자들은 해당사항 없습니다.					
위 로직을 구현하고 보너스 번호는 
내가 추첨하는 번호와 중복되지 않게 합니다.					
등수도 5등~1등까지 다 출력하기							
*************************************/


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


