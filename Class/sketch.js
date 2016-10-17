var rotator = 0;

function setup() {
    createCanvas(1000, 1000);
    background(255);

}

function draw() {
    fill(255, 255, 255, 50);
    rect(0, 0, 1000, 1000);
    fill(255, 0, 0);
    push();
    translate(width / 3, height / 2);
    rotate(PI / 4);
    rect(-50, -50, 100, 100);
    pop();
    push();
    fill(0, 255, 0);
    translate(width / 2, height / 2);
    rotator = map(mouseX, 0, width, 0, 2 * PI);
    rotate(rotator);
    star(0, 0, 30, 70, 5);
    pop();
    push();
    translate(width / (3 / 2), height / 2);
    rotate(PI / 3);
    rect(-50, -50, 100, 100);
    pop();
    if (mouseIsPressed) {
        ciircle();
    }

}

function ciircle() {
    ellipse(mouseX, mouseY, (50, 50));
    ellipse(mouseX, mouseY, (40, 40));
    ellipse(mouseX, mouseY, (30, 30));
}


function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
