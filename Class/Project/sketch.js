var noteA;
var noteB;
var noteC;
var noteD;
var noteE;
var noteF;
var noteG;
var keySize;
var keyArray = [];

function preload() {
    noteA = loadSound("assets/A.mp3");
    noteB = loadSound("assets/B.mp3");
    noteC = loadSound("assets/C.mp3");
    noteD = loadSound("assets/D.mp3");
    noteE = loadSound("assets/E.mp3");
    noteG = loadSound("assets/G.mp3");
}

function setup() {

    createCanvas(500, 500);
    keySize = width / 6;
    console.log(keySize);
    for (var i = 0; i <= 6; i++) {
        keyArray[i] = new key(keySize * i, keySize);
    }
}

function draw() {
    background(150);
    for (var j = 0; j < keyArray.length; j++) {
        if (keyArray % 2 == 0) {
            fill(255);
            keyArray[j].make();
        } else {
            fill(0);
            keyArray[j].make();
        }
    }
}

function key(_x, _keyWidth) {
    this.x = _x;
    this.width = _keyWidth;
    this.make = function() {
        rect(this.x, hight - 100, this.width, 100)
        if (this.x / width == 1) {
            noteA.play();
        } else if (this.x / width == 2) {
            noteB.play();
        } else if (this.x / width == 3) {
            noteC.play();
        } else if (this.x / width == 4) {
            noteD.play();
        } else if (this.x / width == 5) {
            noteE.play();
        } else if (this.x / width == 6) {
            noteG.play();
        }
    }
};
