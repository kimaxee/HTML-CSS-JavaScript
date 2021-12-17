function dw(str) {
    document.write(str);
}

function br() {
    document.write("<br>");
}

function Scissors() {
    document.write("<img id=Scissors src='가위.png'>")
    }

function Rock() {
    document.write("<img id=Rock src='바위.png'>")
    }

function Paper() {
    document.write("<img id=Paper src='보.png'>")
    }
var computer = Math.floor(Math.random() * 3) + 1
