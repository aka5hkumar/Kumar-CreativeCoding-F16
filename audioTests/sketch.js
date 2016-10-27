var testSound;

function preload() {
    testSound = loadSound("assets/MoveNext.mp3");
}

function setup() {
  testSound.play();

}
function draw()
{
  testSound.play();
}
/*
function draw() {
    testSound.play();
    console.log(testSound.isPlaying());
  //  mouseClicked();
}

function mouseClicked() {
      testSound.stop()
    }
*/

function playStart()
{

}
