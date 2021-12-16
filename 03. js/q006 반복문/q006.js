var random;
random = Math.floor(Math.random() * 100) + 1;

document.write("<div id=cat_box>")
for (var a = 0; a < random; a = a + 1) {
    document.write("<div class='cat_flex_box'>");
    document.write("<img class='cat' src='cat.jpg'>");
    document.write("<p class='cat_number'>" + a + "</p>");
    document.write("</div>");

}
document.write("</div>")
