var numbers = new Array(6);

for (var i = 0; i < numbers.length; i++) { //배열 수 만큼 반복
    numbers[i] = Math.floor(Math.random() * 45 + 1);
    dw(numbers[i]);
    br();
}