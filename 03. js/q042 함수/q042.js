function number1() {
    return 100;
}

function number2() {
    return 200;
}

function number3(c, d) {
    return c + d;
}
/* case 1 */
dw(number1());
br();
dw(number2());
br();
dw(number3(100,150));
br();
dw(number3(number1(),number2()));

hr();hr();hr();hr();hr();


/* case 2 */
var q = number1();
var w = number2();
var e = number3(100, 150);
var r = number3(q, w);

dw(q);
br();
dw(w);
br();
dw(e);
br();
dw(r);
br();

