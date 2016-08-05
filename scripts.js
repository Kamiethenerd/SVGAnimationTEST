var can = document.getElementById('sky');
var ctx = can.getContext('2d');

//var svg = document.getElementById('mySVG');

var img = new Image();
img.onload = function() {
ctx.drawImage(img,200, 200);
}
img.src = "firework.svg";