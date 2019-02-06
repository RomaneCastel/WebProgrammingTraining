var intervalID;
var counter = 10;
var laDiv;

function init(){
	laDiv=document.getElementById('div');
	laDiv.setAttribute('id','div');
	count(laDiv);
}		

function count(){
	intervalID = setInterval(decremente,1000);
		// attention dans le setInterval passer une callback et pas une éxécution de fonction, donc ne dois pas avoir d'argument
}

function decremente(){
	laDiv.innerHTML = counter;
	counter -=1;
	if(counter ===0){
		clearInterval(intervalID);
	}
}
