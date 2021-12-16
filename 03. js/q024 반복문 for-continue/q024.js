var i;
i = Math.floor(Math.random() * 10) + 1;

for (i; i <= 10; i++) {
    if (i == 7) {
        continue;
    }
    document.write(i + "<br>");
}		