document.write(typeof 2);


function variablefunction() {
var x = 1;
var y = "hi";
var k = y + x;
document.getElementById("pull").innerHTML = k;
}

function eqfunction() {
    var h = 4;
    document.getElementById("equal").innerHTML = (h == 4);
}

function eeqfunction() {
    var q = 7;
    document.getElementById("eequal").innerHTML = (q === "7")
}

function grfunction() {
    var f = 0;
    document.getElementById("greater").innerHTML = (f > 1);
}

function lefunction() {
    var m = 9;
    document.getElementById("less").innerHTML = (9 < 10);
}

function andfunction() {
    var s = 12;
    var w = 13;
    document.getElementById("andand").innerHTML = (s < 15 && w > 1);
}

function orfunction () {
    var i = 20;
    var z = 30;
    document.getElementById("or").innerHTML = (i === 5 || z === 30);
}

function notfunction () {
    var t = 60;
    var r = 70;
    document.getElementById("not").innerHTML = !(r === t);
}