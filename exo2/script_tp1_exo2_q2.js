var intervalID;
var laDiv;
var redSquare;
var canvas;
var ctx;
var size = 50;
var x = 0;
var y = 0;
var speed = 10;

function init(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, size, size);
	move();
}

function move(){
	intervalID = setInterval(squareMovePositive,100);
}

function squareMovePositive(){
	x += speed;
	ctx.fillRect(x, y, size, size);
	ctx.clearRect(x-10, y, 10, size);
	if(x === canvas.width-size){
		clearInterval(intervalID);
		intervalID = setInterval(squareMoveNegative,100);
	}
}	

function squareMoveNegative(){
	x += -speed;
	ctx.fillRect(x, y, size, size);
	ctx.clearRect(x+size, y, 10, size);
	if(x === 0){
		clearInterval(intervalID);
		intervalID = setInterval(squareMovePositive,100);
	}
}

