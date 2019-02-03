var canvas;
var Id;
var x = 100;
var y = 100;
var size = 50;

function init(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");
	ctx.fillStyle = 'red';
	render();
}

function pausecomp(millis){
	var date = new Date();
	var curDate = null;
	do{
		curDate = new Date();
	}while(curDate-date<millis);
}

function render(){
	var date = new Date();
	pausecomp(60);
	var curDate = new Date();
	var difference = curDate-date;
	if( difference < 500 && x < canvas.width){
		Id = window.requestAnimationFrame(render);
	}
	else{//go to another page
		date = curDate;
		Id = window.requestAnimationFrame(render);
	}
	ctx.clearRect(x,y,size, size);
	x += difference;
	ctx.fillRect(x,y, size, size);
}
