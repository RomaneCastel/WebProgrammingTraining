function init(){
	laDiv=document.getElementById('div');
	//var elem = document.getElementById("square");
	var left = 500;
	var timer;
	// Move the element 10px on the right every 16ms
	/*timer = setInterval(function() {
		laDiv.style.left = ( left -= 10 ) + "px";
		
		// clear the timer at 400px to stop the animation
		if ( left <=0 ) {
			clearInterval( timer );
		}
	},16);*/

	timer = setInterval(function() {
		laDiv.style.left = ( left -= 10 ) + "px";
		
		// clear the timer at 400px to stop the animation
		if ( left <=0 ) {
			clearInterval( timer );
		}
	},pausecomp(16));

	function pausecomp(millis){
		var date = new Date();
		var curDate = null;
		do{
			curDate = new Date();
		}while(curDate-date < millis);
	}
}
