/*************************************
문37 로또

로또 복권 1~45 번 숫자 공에서 6개를 뽑아서 
그걸로 당첨 여부를 확인하는 복권			
	lottoV0.1.0						
*************************************/

var numbers = new Array(6);

for (var i = 0; i < numbers.length; i++) { //배열 수 만큼 반복
    numbers[i] = Math.floor(Math.random() * 45 + 1);
    dw(numbers[i] + " ");
}



