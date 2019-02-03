function init(){
	laDiv=document.getElementById('div');
	var timer;
	// Move the element 10px on the right every 16ms
	var timestamp = new Date();
	var left = 500;

	function render(){
		var currentTime = new Date();
		progress = currentTime - timestamp;
		left -= progress;
		console.log(left);
		laDiv.style.left = ( left ) + "px";
		// clear the timer at 400px to stop the animation
		window.requestAnimationFrame(render);
		timestamp = new Date();
	}

	requestAnimationFrame(render);
}
