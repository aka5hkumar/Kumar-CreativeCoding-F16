var whichBlock;
var keyList;

function preload() {
    A = loadSound("assets/A.mp3");
    B = loadSound("assets/B.mp3");
    C = loadSound("assets/C.mp3");
    keyList = [A, B, C];
}

function setup() {
    whichBlock = [0, 0, 0, 0];
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    startScreen();

}

function startScreen() {
    var demoRectSize = 100;
    var innerOffset = (width / 6) - (demoRectSize / 3);

    background(0, 0, 0);
    fill(255, 0, 0, 200);
    rect(1 * innerOffset, height / 2, demoRectSize, demoRectSize);
    fill(0, 255, 0, 200);
    rect(3 * innerOffset, height / 2, demoRectSize, demoRectSize);
    fill(0, 0, 255, 200);
    rect(5 * innerOffset, height / 2, demoRectSize, demoRectSize);
}

function mouseClicked() {

    whichBlock = get(mouseX, mouseY);
    console.log(whichBlock)
    clickPlay();
}

function clickPlay() {
    var colorBlock;
    for (i = 0; i < 3; i++) {
        if (whichBlock[i] > 0) {
            colorBlock = i;
            keyList[colorBlock].play();
        }
    }
}
