let size = 10;
function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(255);
	ellipse(mouseX,mouseY,size,size);
}

function mousePressed(){
	size +5;
}
