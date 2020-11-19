function date(){ //
	if (new Date().getHours() < 18) {
	document.getElementById("Hi").innerHTML = "How are you?";
	}
}

function Time_function() {
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply = "It is morning time!";
	}
	else if (Time > 12 == Time < 18) {
		Reply = "It is the afternoon.";
	}
	else {
		Reply = "It is evening time.";
	}
	document.getElementById("Time_of_day").innerHTML = Reply;
}

var x = 8;
function add() {
	document.write(25 + x + "<br>");
}
function add2() {
		document.write(x + 30);
}
add();
add2();

function addnum1() {
	var y = 50
	document.write(10 + y + "<br>");
}
function addnum2() {
	var y = 50
	document.write(y + 200);
	}
addnum1();
addnum2();

function addnum2() {
	console.write(y + 200);
	}
addnum2();

