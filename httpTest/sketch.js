//Akash Kumar
/*
The Idea of this game is pretty simple. You are a hungry raccoon
looking to eat as many apples as you can. I need to also avoid the
pointy acorns and darkness. To avoid darkness keep your score above
zero, and be sure to always be moving to avoid predators. “Clicking”
also serves to change the items that fall, indicating movement to a
new part of the forest.
*/
var gameScreen = 0;
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
var backdrop;
var spriteImage;
var acorn;
var apple;

function preload() {
    backdrop = loadImage("assets/backdrop.png");
    spriteImage = loadImage("assets/sprite.png");
    acorn = loadImage("assets/acorn.png");
    apple = loadImage("assets/apple.png");
}

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
    } else if (gameScreen == 3) {
        winScreen();
    }
}


/// Screens/////
function startScreen() {
    background(0);
    textAlign(CENTER);
    //Rules and Instructions, click to continue
    fill(255);
    text("Rules & Instructions", 250, 200);
    text("Acorns hurt, Apples help", 250, 220);
    text("Move with arrow keys, click if unfair", 250, 240);
    text("Whatever you do, do not stop moving", 250, 260);
    text("Click to Continue", 250, 280);
}

function mainScreen() {
    //main function

    background(score);
    image(backdrop, 0, 0);
    fill(0);
    hit();
    movement++;
    //println("no movement", movement);
    shapes();
    for (var i = 0; i < 256; i += score) {
        colorMode(HSB, 255);
        shade = color(35, i, 43);
        fill(shade);
        colorMode(RGB);
    }
    rect(0, 450, 500, 50);
    fill(255);
    text("Score: ", 230, 480);
    text(score, 270, 480);
    //println(shape1, shape2, shape3, shapeLocation1, shapeLocation2, shapeLocation3);
    //Background image
    //build sprite
    //Load shapes
    //Call keyboard and mouse input
    //draw lives


}

function winScreen() {
    background(0);
    textAlign(CENTER);
    //You Lost
    fill(255);
    text("Score: ", 250, 180);
    text(score, 250, 200);
    text("You Win!", height / 2, width / 2);
}

function endScreen() {
    background(0);
    textAlign(CENTER);
    //You Lost
    fill(255);
    text("Score: ", 250, 180);
    text(score, 250, 200);
    text("You Lose", height / 2, width / 2);

}
// ///////////////Steering functions////////////////////
function randoms() {
    shape1 = int(random(0, 2));
    shape2 = int(random(0, 2));
    shape3 = int(random(0, 2));
    shapeLocation1 = int(random(50, 100));
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
for (i=0; i<width; i++)
println(i);
    if (shape1 == 0) {
        fill(circleColor);
        image(apple, i%5, shapeLocationY1);
        //ellipse(shapeLocation1, shapeLocationY1, 50, 50)
        if (speed > 4500) {
            randoms();
        }
    } else if (shape1 == 1) {
        fill(0, 0, 255);
        image(acorn, shapeLocation1, shapeLocationY1);
        //rect(shapeLocation1, shapeLocationY1, 50, 50);
        if (speed > 4500) {
            randoms();
        }
    }
    if (shape2 == 0) {
        fill(circleColor);
        image(apple, shapeLocation2, shapeLocationY2);
        //ellipse(shapeLocation2, shapeLocationY2, 50, 50)
        if (speed > 4500) {
            randoms();
        }
    } else if (shape2 == 1) {
        fill(0, 0, 255);
        image(acorn, shapeLocation2, shapeLocationY2);
        //rect(shapeLocation2, shapeLocationY2, 50, 50);
        if (speed > 4500) {
            randoms();
        }
    }
    if (shape1 == 0) {
        fill(circleColor);
        shapeLocationY2 = (time % 5000) / (shapeLocation3 / 50);
        image(apple, shapeLocation3, shapeLocationY3);
        //  ellipse(shapeLocation3, shapeLocationY3, 50, 50)
        if (speed > 4800) {
            randoms();
        }
    } else if (shape1 == 1) {
        fill(0, 0, 255);
        image(acorn, shapeLocation3, shapeLocationY3);
        //  rect(shapeLocation3, shapeLocationY3, 50, 50);
        if (speed > 4500) {
            randoms();
        }

    }

    noStroke();
    fill(0, 0, 0, (movement / 4));
    ellipse(spriteX, spriteY, score, score);
    tint(255, 210 - (movement / 4));
    image(spriteImage, spriteX - 25, spriteY - 25);
    tint(255, 255);

    //ellipse random location
    //triangle random location

}

function hit() {
    if (spriteX < shapeLocation1 + 25 && spriteX > shapeLocation1 - 25) {
        if (shapeLocationY1 > 300 && shapeLocationY1 < 400) {
            if (shape1 == 0) {
                score++;
            } else if (shape1 == 1) {
                score--;
            }
        }
    }
    if (spriteX < shapeLocation2 + 25 && spriteX > shapeLocation2 - 25) {
        if (shapeLocationY2 > 300 && shapeLocationY2 < 400) {
            if (shape2 == 0) {
                score++;
            } else if (shape2 == 1) {
                score--;
            }
        }
    }
    if (spriteX < shapeLocation3 + 25 && spriteX > shapeLocation3 - 25) {
        if (shapeLocationY3 > 300 && shapeLocationY3 < 400) {
            //println("Location",shapeLocationY3);
            if (shape3 == 0) {
                score++;
            } else if (shape3 == 1) {
                score--;
            }
        }
    }



    if (keyIsPressed === true) {
        movement = 0;
    }
    if (keyIsDown(LEFT_ARROW)) {
        spriteX -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        spriteX += 5;
    }


    timeOut(score);
    //if shapes location matches sprite location then hit++
    /*
    if hit is green circle, then points
    else lives--
    if lives == 0
    gameScreen==2
    */
}
////Interact function////
function timeOut(score) {
    if (movement >= 1000) {
        gameScreen = 2;
    }
    if (score < 0) {
        gameScreen = 2;
    }
    // if score > 300){
    //   gameScreen=3;
    // }
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
        randoms();
        circleColor = color(0, 255, 0);
    }
    if (gameScreen == 2) {
        setup()
    }
    if (gameScreen == 3) {
        setup()
    }
}
/*

Start screen setup
https://www.toptal.com/game/ultimate-guide-to-processing-simple-game

Images
http://www.lorrain.ca/logo-tree.png
http://66.media.tumblr.com/2ca2889732c7acef83a51f8c480c1158/tumblr_inline_ndnad4onj41rujz3w.png
http://www.abeka.com/BookImages/ClipArt/217433/46x46y50fx50fh/217433-Acorn-color-png.png
http://www.abeka.com/BookImages/ClipArt/235865/46x46y50fx50fh/235865-Red-Apple-with-black-outline-color-png.png
*/
