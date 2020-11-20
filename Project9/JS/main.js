function countdown() {
	var seconds = document.getElementById("seconds").value; //allows js to be pullable
	
	function tick() {
		seconds = seconds - 1; //causes 1s countdown timer
		timer.innerHTML = seconds;
		setTimeout(tick, 1000);
	if(seconds == -1){
		alert("Time's up!");
	}
		}
	tick();
}