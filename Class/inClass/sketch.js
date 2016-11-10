var ballArray = [];
var ballNum;
var leftSound;
var rightSound;
var clickSound;
var stringA;
var stringC;
var stringE;

function preload() {
    aSound = loadSound("assets/left.wav");
    cSound = loadSound("assets/right.wav");
    eSound = loadSound("assets/click.wav");
}

function setup() {
    stringA = width / 2 - 15;
    stringC = width / 2;
    stringE = width / 2 + 15;
    createCanvas(600, 600);
    ballNum = random(1, 10);
    //     for (var i = 0; i < ballNum; i++) {
    //         ballArray[i] = new Ball(random(0, width), random(0, 200), 3);
    //     }
     }


    function draw() {
        background(100);
        for (var i = 0; i < ballArray.length; i++) {
            ballArray[i].animate();
            ballArray[i].display();
        }
        staticShapes();
    }

function staticShapes()
{
  fill(255, 0, 255);
  rect(width / 2 - 50, height / 2 - 50, 50, 50);
  fill(0, 5, 67);
  ellipse(width / 2 - 15, height / 2 - 15, 15, 15);
  fill(255);
  rect(stringA, 250, 10, 100);
  rect(stringC, 250, 10, 100);
  rect(stringE, 250, 10, 100);
}
    function mouseClicked() {
        var tempBall = new Ball(mouseX, mouseY, random(1, 10));
        ballArray.push(tempBall);
        //  clickSound.play();
    }

    function Ball(_x, _y, _vel) {

        this.x = _x;
        this.y = _y;
        this.vel = _vel;

        if (this.x == stringA) {
            aSound.play()
        }
        if (this.x == stringC) {
            cSound.play();
        }
        if (this.x == stringE) {
            eSound.play();
        }

    this.animate = function() {
        this.x += this.vel;
        if (this.x > width || this.x < 0) {
            this.vel = -this.vel;
        }
    }

    this.display = function() {
        ellipse(this.x, this.y, 30, 30);
    }
};
