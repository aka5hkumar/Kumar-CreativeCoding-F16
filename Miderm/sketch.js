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
var score = 0;
var circleColor;
var characterColor = 255;
var i;
var j;
var k;
var clock=60;

function setup() {
    createCanvas(500, 500)
    background(255);
   randoms();
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
    circleColor = color(255, 0, 0);
    background(156);
    fill(0);
    rect(0, 450, 500, 50);

  //  println(randoms());
    shapes();
    fill(255);
    text(score, 480, 480);
    text(lives, 20, 480);
      println (shape1, shape2, shape3, shapeLocation1, shapeLocation2, shapeLocation3);
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
  shapeLocation1 = int(random(50,150));
  shapeLocation2 = int(random(200, 300));
  shapeLocation3 = int(random(350, 450));


    //Reset the random numbers on call
}

function shapes() {
  var time = int(millis());
  println(time);
    for (i = 0; i < time; i++) {
        if (shape1 == 0) {
            fill(circleColor);
            ellipse(shapeLocation1, time%500 , 50,50)
        } else if (shape1 == 1) {
            fill(0, 0, 255);
          rect(shapeLocation1,time%500, 50,50);
      }
    }
    for (j = 0; j < width; j+=1) {
        if (shape2 == 0) {
            fill(circleColor);
            ellipse(shapeLocation2, 100+time%400, 50,50)
        } else if (shape2 == 1) {
            fill(0, 0, 255);
            rect(shapeLocation2, 100+time%400, 50,50)
        }
    }
    for (k = 0; k < width; k+=1) {
        if (shape3 == 0) {
            fill(circleColor);
            ellipse(shapeLocation3,200+time&300, 50,50)
        } else if (shape3 == 1) {
            fill(0, 0, 255);
            rect(shapeLocation3, 200+time&300, 50,50)
        }
    }
    if (i > width) {
        i == 0;
        randoms();
    }

    if (j > width) {
        j == 0;
        randoms();
    }
    if (k > width) {
        k == 0;
        randoms();
    }
    //println(i,j.k);
    //ellipse random location
    //triangle random location

}

function movement() {
    /*
    Move the sprite left and right
    get location of shapes
    */

}

function hit() {
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
    //if no movement change sprite color per frame once color == red, gameScreen == 2
}


function keyPressed() {
    //  if keyCode == Arrows
    //  else nothing
}

function startGame() {
    gameScreen = 1;
}

function checkShape() {
    /*
    there are three shapes, if HIT check which kind was hit, and check color. If bad, 1 if good 0.
    */

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
