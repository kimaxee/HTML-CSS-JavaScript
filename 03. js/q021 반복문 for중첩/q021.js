const star = "★"
const star2 = "☆"

for (var i; i <= 10; i++) {
    for (var j = 10; j > i; j--)
        document.write(star2)
    for (var j = 1; j <= i; j++) {
        document.write(star)
    }
    document.write("<br>")
}


for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        if (j <= (10 - i)) {   // 9-1 , 8-2
            document.write(star2);
        } else {
            document.write(star);
        }
    }
    document.write("<br>");
}
