var rad = 40;
var xpos, ypos;
var xspeed = 2.8;
var yspeed = 2.2;

var xdirection = 1;
var ydirection = 1;
var boundSound;
var woosh;

function preload() {
    bounceSound = loadSound("assets/bounce.wav");
    wooshSound = loadSound("assets/woosh.mp3");
}

function setup() {
    createCanvas(500, 500);
    ellipseMode(RADIUS);
    xpos = width / 2;
    ypos = height / 2;
}

function draw() {
    background(150,10,0);
    xpos = xpos + (xspeed * xdirection);
    ypos = ypos + (yspeed * ydirection);
    wooshSound.play();

    if (xpos > width - rad || xpos < rad) {
        xdirection *= -1;
        wooshSound.pause();
        bounceSound.play();
    }
    if (ypos > height - rad || ypos < rad) {
        ydirection *= -1;
        wooshSound.pause();
        bounceSound.play();
    }
    fill(200,0,254);
    ellipse(xpos, ypos, rad, rad);
}
//Bounce code taken from processing sketch
