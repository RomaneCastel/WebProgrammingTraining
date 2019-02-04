var canvas;
var allSprite = new Image();
var spriteNumber = 0;
var time;
var size = 100;

function init(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	allSprite.src = './images/coin-sprite-animation.png';
	time = window.requestAnimationFrame(renderNextSprite);
}

function renderNextSprite(){
	pausecomp(200);
	spriteNumber +=1;
	if(spriteNumber > 9){ // 10 different sprites 
		spriteNumber = 0;
	}
	console.log(spriteNumber);
	ctx.clearRect(0,0,size,size);
	ctx.drawImage(allSprite, spriteNumber*size, 0, size, size,0,0,size, size);
	window.requestAnimationFrame(renderNextSprite);
}

function pausecomp(millis){
	var date = new Date();
	var curDate = null;
	do{
		curDate = new Date();
	}while(curDate-date<millis);
}
