var velocity;
var Ball;
var xLoc;
var yLoc;
var x;
var y;
var xspeed;
var xdirection;
var rad;

function setup() {
    createCanvas(500, 500);
    ellipseMode(RADIUS);
    velocity = 5;
    var rad = 40;
    xpos = width / 2;
    ypos = height / 2;
    Ball = new BounceClass(velocity, xpos, ypos, rad);

}

function draw() {
    background(150, 10, 0);
    Ball.animate();
}

function BounceClass(speed, ex, yy, rad) {
    this.x = 30;
    this.y = this.x;
    this.yLoc = ex;
    this.xLoc = yy;
    this.xspeed = speed;
    this.xdirection = 1;
    this.rad=rad;

    this.animate = function() {
        xLoc = xLoc + (xspeed * xdirection);


        if (xpos > width - rad || xpos < rad) {
            xdirection *= -1;
        }

        fill(200, 0, 254);
        ellipse(xLoc, yLoc, rad, rad);
    }

};
