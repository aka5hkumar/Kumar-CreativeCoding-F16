var legoColor=0;
var timeMoved;

function setup() {
    createCanvas(1000, 1000)
    background(250);
}

function draw() {
    push();
    fill(legoColor, 250, 0);
    beginShape();
    curveVertex(100,100);
    curveVertex(200,110);
    endShape();
    pop();

}
