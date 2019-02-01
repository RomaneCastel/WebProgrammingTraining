function init(){
	laDiv=document.getElementById('div');
	//var elem = document.getElementById("square");
	var left = 1000;
	var timer;
	var lastTime = 0;
	var currentTime = 0;
	// Move the element 10px on the right every 16ms
	/*timer = setInterval(function() {
		laDiv.style.left = ( left -= 10 ) + "px";
		
		// clear the timer at 400px to stop the animation
		if ( left <=0 ) {
			clearInterval( timer );
		}
	},16);*/

	timer = setInterval(function() {
		laDiv.style.left = ( left -= 200 ) + "px";
		pausecomp(200);
		// clear the timer at 400px to stop the animation
		if ( left <=0 ) {
			clearInterval( timer );
		}
	},16);

	function pausecomp(millis){
		var date = new Date();
		var curDate = null;
		do{
			curDate = new Date();
			//console.log(curDate-date);
		}while(curDate-date < millis);
	}
}
