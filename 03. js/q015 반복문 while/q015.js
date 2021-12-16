var s = 0
document.write("짝짝짝")

while (s != 100) {
    s = prompt("정답을 맞춰보세요");

    if (s < 100)
        s = alert("정답보다 작습니다");

    else if (s > 100)
    s = alert("정답보다 큽니다");

else
    alert("정답입니다");
}