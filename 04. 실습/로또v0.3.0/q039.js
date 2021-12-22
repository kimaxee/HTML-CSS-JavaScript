/*************************************
문39	로또	

1. 컴퓨터가 1~45 수를 6개 뽑아서 출력		
단, 중복해서 번호가 나올 경우 다시 뽑기. 
6개 다 뽑을 때 까지.
(계속 도중에 앞에 뽑은 번호와 중복 되는 번호가
 나오면 다시 뽑게 처리 해야 함)	
 lottoV0.3.0									
추첨번호	 1							
			    2		1					
		    	3		1	2				
		    	4		1	2	3			
		    	5		1	2	3	4		
		    	6		1	2	3	4	5	
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




  dw("컴 번호 : ");
  for (var i = 0; i < 6; i++) {
    dw(comLotto[i] + " ");
  }

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

  br();
  dw(winCount + "개 일치");

