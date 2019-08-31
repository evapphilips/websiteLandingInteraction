// Eva Philips
// August 25, 2019
// This program is....

// variables



function setup() {
	// setup canvas
	let cvs = createCanvas(windowWidth, windowHeight);
	cvs.center();
	cvs.style('margin-top', '0px');
	background(255);
}

function draw() {
	background(255);

	let r = map(mouseY, 0, height, 0, 3*height/4);

	stroke(0);
	strokeWeight(5);
	noFill();
	rectMode(CENTER);
	rect(width/2, height/2, 3*width/4, 3*height/4, r);	
}




