//Akash Kumar
/*
Description
*/
var gameScreen = 0;
var lives = 3;
var shapeLocation1;
var shapeLocation2;
var shapeLocation3;
var shape1;
var shape2;
var shape3;
var score = 100;
var circleColor;
var characterColor = 255;
var spriteX = 250;
var spriteY = 400;
var movement = 0;
var shapeLocationY1;
var shapeLocationY2;
var shapeLocationY3;

function setup() {
    createCanvas(500, 500)
    background(255);
    randoms();
    circleColor = color(255, 0, 0);
}

function draw() {
    if (gameScreen == 0) {
        startScreen();
    } else if (gameScreen == 1) {
        mainScreen();
    } else if (gameScreen == 2) {
        endScreen();
    }
}


/// Screens/////
function startScreen() {
    background(0);
    textAlign(CENTER);
    //Rules and Instructions, click to continue
    fill(255);
    text("Click to start", height / 2, width / 2);
}

function mainScreen() {
    //main function

    background(156);
    fill(0);
    hit();
    movement++;
    //println("no movement", movement);
    shapes();
    fill(0);
    rect(0, 450, 500, 50);
    fill(255);
    text(score, 480, 480);
    text(lives, 20, 480);
    //println(shape1, shape2, shape3, shapeLocation1, shapeLocation2, shapeLocation3);
    //Background image
    //build sprite
    //Load shapes
    //Call keyboard and mouse input
    //draw lives


}

function endScreen() {
    background(0);
    textAlign(CENTER);
    //You Lost
    fill(255);
    text(score, 200, 200);
    text("You lose", height / 2, width / 2);
}
// ////////////////////////////////////////Steering functions////////////////////
function randoms() {
    shape1 = int(random(0, 2));
    shape2 = int(random(0, 2));
    shape3 = int(random(0, 2));
    shapeLocation1 = int(random(50, 150));
    shapeLocation2 = int(random(200, 300));
    shapeLocation3 = int(random(350, 450));


    //Reset the random numbers on call
}

function shapes() {
    var time = int(millis());
    //println(time);
    speed = (time % 5000);
    shapeLocationY1 = (time % 5000) / (shapeLocation1 / 30);
    shapeLocationY2 = (time % 5000) / (shapeLocation2 / 40);
    shapeLocationY3 = (time % 5000) / (shapeLocation3 / 50);
    if (shape1 == 0) {
        fill(circleColor);
        ellipse(shapeLocation1, shapeLocationY1, 50, 50)
        if (speed > 4500) {
            randoms();
        }
    } else if (shape1 == 1) {
        fill(0, 0, 255);
        rect(shapeLocation1, shapeLocationY1, 50, 50);
        if (speed > 4500) {
            randoms();
        }
    }
    if (shape2 == 0) {
        fill(circleColor);
        ellipse(shapeLocation2, shapeLocationY2, 50, 50)
        if (speed > 4500) {
            randoms();
        }
    } else if (shape2 == 1) {
        fill(0, 0, 255);
        rect(shapeLocation2, shapeLocationY2, 50, 50);
        if (speed > 4500) {
            randoms();
        }
    }
    if (shape1 == 0) {
        fill(circleColor);
        shapeLocationY2 = (time % 5000) / (shapeLocation3 / 50);
        ellipse(shapeLocation3, shapeLocationY3, 50, 50)
        if (speed > 4800) {
            randoms();
        }
    } else if (shape1 == 1) {
        fill(0, 0, 255);

        rect(shapeLocation3, shapeLocationY3, 50, 50);
        if (speed > 4500) {
            randoms();
        }
    }
    fill(movement / 4);
    ellipse(spriteX, spriteY, 50, 80);
    //ellipse random location
    //triangle random location

}

function hit() {
    if (spriteX == shapeLocation1 && shapeLocationY1 > 300) {
        if (shape1 == 0) {
            score += 10;
        } else if (shape1 == 1) {
            score -= 10;
        }
    }
    if (spriteX == shapeLocation2 && shapeLocationY2 > 300) {
        if (shape2 == 0) {
            score += 10;
        } else if (shape2 == 1) {
            score -= 10;
        }
    }
    if (spriteX == shapeLocation3 && shapeLocationY3 > 300) {
        //println("Location",shapeLocationY3);
        if (shape3 == 0) {
            score += 10;
        } else if (shape3 == 1) {
            score -= 10;
        }
    }
    if (score < 0); {
        gameScreen == 2;
    }
    if (keyIsPressed === true) {
        movement = 0;
    }
    if (keyIsDown(LEFT_ARROW)) {
        spriteX -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        spriteX += 5;
    }
    //if shapes location matches sprite location then hit++
    /*
    if hit is green circle, then points
    else lives--
    if lives == 0
    gameScreen==2
    */
}
////Interact function////
function timeOut() {
    if (movement >= 1000) {
        gameScreen = 2;
    }
    if (lives < 1) {
        gameScreen = 2;
    }
    //if no movement change sprite color per frame once color == red, gameScreen == 2
}



function startGame() {
    gameScreen = 1;
}

function mousePressed() {
    if (gameScreen == 0) {
        startGame()
    }
    if (gameScreen == 1) {
        circleColor = color(0, 255, 0);
    }
    if (gameScreen == 2) {
        startGame()
    }
}
/*

Start screen setup
https://www.toptal.com/game/ultimate-guide-to-processing-simple-game

*/
