var intervalID;
var intervalID2;
var intervalID3;
var intervalID4;
var intervalID5;
var intervalID6;
var laDiv;
var size = 50;
var square1 = {x:0, y:0, size:size,};
var square2 = {x:0,y:0, size:size};
var square3 = {x:0,y:0, size:size};
var rects=[]
rects.push(square1);
rects.push(square2);
rects.push(square3);
var canvas;
var ctx;
var x = 0;
var y = 0;
var speed = 10;
var wait = 1;
var counter1 = 0;
var counter2 = 0;

function init(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "red";
	draw();
	intervalID2 = setInterval(start1,1000);
	intervalID3 = setInterval(start2,4000);
	intervalID5 = setInterval(start3,6000);
}

function move1(){
	intervalID = setInterval(squareMovePositive1,100);
}

function move2(){
	intervalID4 = setInterval(squareMovePositive2,100);
}

function move3(){
	intervalID6 = setInterval(squareMovePositive3,100);
}

function squareMovePositive1(){
	rects[0].x += speed;
	if(counter1 >= size/10){
		ctx.clearRect(rects[0].x-10, y, 10, size);
	}
	counter1 += 1;
	ctx.fillRect(rects[0].x, y, size, size);
	if(rects[0].x === canvas.width-size){
		clearInterval(intervalID);
	}
}	

function squareMovePositive2(){
	rects[1].x += speed;
	if(counter2 >= size/10){
		ctx.clearRect(rects[1].x-10, y, 10, size);
	}
	counter2 += 1;
	ctx.fillRect(rects[1].x, y, size, size);
	if(rects[1].x === canvas.width-size){
		clearInterval(intervalID4);
	}
}	

function squareMovePositive3(){
	rects[2].x += speed;
	ctx.clearRect(rects[2].x-10, y, 10, size);
	ctx.fillRect(rects[2].x, y, size, size);
	if(rects[2].x === canvas.width-size){
		clearInterval(intervalID6);
	}
}	


function start1(){
	move1();
	clearInterval(intervalID2);
}

function start2(){
	move2();
	clearInterval(intervalID3);
}

function start3(){
	move3();
	clearInterval(intervalID5);
}


function draw(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	for(var i=0; i<rects.length; i++){
		var r = rects[i];
		ctx.beginPath();
		ctx.fillRect(r.x, r.y, r.size, r.size);
		ctx.closePath();
		ctx.fill();
	}
}

