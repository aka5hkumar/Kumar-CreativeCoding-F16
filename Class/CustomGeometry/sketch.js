var rotation = 0;

function setup() {
    createCanvas(1000, 1000);
    background(255);
}

function draw() {
    noStroke();
    fill(25, 100, 150);
    shape(PI / 2, mouseY, mouseX);
}

function shape(rotation, mouseY, mouseX) {
    push()
    translate(500,500);
    rotate(rotation);
    ellipse(100, 100, 30, 30);
    ellipse(-mouseY, mouseX, 30, 30);
    quad(100,100,200,200, 300,300, 400,400);
    pop()
}
