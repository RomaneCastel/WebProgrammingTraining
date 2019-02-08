var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null;

//Canvas
var divArena;
var canArena;
var conArena;
var ArenaWidth = 500;
var ArenaHeight = 300;

//Background
var imgBackground;
var xBackgroundOffset = 0;
var xBackgroundSpeed = 1;
var backgroundWidth = 1782;
var backgroundHeight = 600;

///////////////////////////////////
//Keys
var keys = {
    UP: 38,
    DOWN: 40,
    SPACE: 32,
    ENTER: 13
};

var keyStatus = {};

function keyDownHandler(event) {
    "use strict"; 
    var keycode = event.keyCode, 
        key; 
    for (key in keys) {
        if (keys[key] === keycode) {
            keyStatus[keycode] = true;
            event.preventDefault();
        }
    }
}
function keyUpHandler(event) {
   var keycode = event.keyCode,
            key;
    for (key in keys) 
        if (keys[key] == keycode) {
            keyStatus[keycode] = false;
        }
        
    }
///////////////////////////////////



/////////////////////////////////
// Hero Player
var imgPlayer = new Image();
imgPlayer.src = "./assets/Ship/f1.png";
var xPlayer = 20;
var yPlayerSpeed = 10;
var yPlayer = 100;
var PlayerHeight = 15;
var PlayerWidth = 32;
var PlayerImgHeight = 29;
var PlayerImgWidth = 64;
/////////////////////////////////


/////////////////////////////////
//Enemy
var imgEnemy = new Image();
imgEnemy.src = "./assets/Enemy/HueShifted/eSpritesheet_40x30_hue1.png";
//imgEnemy.src = "./assets/Ship/f1.png";
var xEnemy = 150;
var xEnemySpeed = -1;
var yEnemy = 100;
var EnemyHeight = 15;
var EnemyWidth = 32;
var EnemyImgHeight = 30;
var EnemyImgWidth = 40;
/////////////////////////////////



function updateScene() {
    "use strict"; 
    xBackgroundOffset = (xBackgroundOffset - xBackgroundSpeed) % backgroundWidth;
}
function updateItems() {
    "use strict"; 
    clearItems();
    
    var keycode;
    for (keycode in keyStatus) {
            if(keyStatus[keycode] == true){
                if(keycode == keys.UP) { 
                    yPlayer -= yPlayerSpeed;   
                }
                if(keycode == keys.DOWN) { 
                    yPlayer += yPlayerSpeed;   
                } 
                if(keycode == keys.Space) { 
                    //shoot
                }             
            }
        keyStatus[keycode] = false;
    }
		xEnemy += xEnemySpeed;
}
function drawScene() {
    "use strict"; 
    canArena.style.backgroundPosition = xBackgroundOffset + "px 0px" ;
}
function drawItems() {
    "use strict"; 
    conArena.drawImage(imgPlayer, 0,0,PlayerImgWidth,PlayerImgHeight, xPlayer,yPlayer,PlayerWidth,PlayerHeight);
	conArena.drawImage(imgEnemy, 0, 0, EnemyImgWidth, EnemyImgHeight, xEnemy, yEnemy, EnemyWidth, EnemyHeight);
}
function clearItems() {
    "use strict"; 
    conArena.clearRect(xPlayer,yPlayer,PlayerWidth,PlayerHeight);
	conArena.clearRect(xEnemy,yEnemy,EnemyWidth,EnemyHeight);
}

function updateGame() {
    "use strict"; 
    updateScene();
    updateItems();
}

function drawGame() {
    "use strict"; 
    drawScene();
    drawItems();    
}


function mainloop () {
    "use strict"; 
    updateGame();
    drawGame();
}

function recursiveAnim () {
    "use strict"; 
    mainloop();
    animFrame( recursiveAnim );
}
 
function init() {
    "use strict";
    divArena = document.getElementById("arena");
    canArena = document.createElement("canvas");
    canArena.setAttribute("id", "canArena");
    conArena = canArena.getContext("2d");
    divArena.appendChild(canArena);
 
    
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);
    
    animFrame( recursiveAnim );
    
}

window.addEventListener("load", init, false);
