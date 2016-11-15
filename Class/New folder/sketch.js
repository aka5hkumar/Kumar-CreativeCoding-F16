var A;
var B;
var C;
var D;
var E;
var F;
var G;
var baby;
var keySize;
var soundKey;
var keySize;
var octave;
var img;
var sumNotes = 0;
var keyVertical;
var keyArray = [];
var keyList = [];
var keyHistory = [0];

function preload() {
    baby = loadImage("assets/baby.png");
    A = loadSound("assets/A.mp3");
    B = loadSound("assets/B.mp3");
    C = loadSound("assets/C.mp3");
    D = loadSound("assets/D.mp3");
    E = loadSound("assets/E.mp3");
    F = loadSound("assets/F.mp3");
    G = loadSound("assets/G.mp3");
    keyList = [A, B, C, D, E, F, G];
    // for (var k=0; k>keyList.length; k++)
    // {
    // 	keyList[k]=loadSound("assets/",k,".mp3");
    // 	console.log(keyList[k]);
    // }
}

function setup() {
    octave = 7;
    createCanvas(500, 500);
    keyVertical = height - 100;
    keySize = width / octave;
    for (var i = 0; i <= octave; i++) {
        keyArray[i] = new keyBox(keySize * i, keySize);
        img= new imgs();
    }
}

function draw() {
	img.make();
    for (var j = 0; j < keyArray.length; j++) {
        if (j % 2 == 0) {
            fill(20);
            keyArray[j].make();
        } else {
            fill(240);
            keyArray[j].make();
        }
    }
	
}

function keyBox(_x, _keyWidth) {
    this.x = _x;
    this.width = _keyWidth;
    this.make = function() {
        rect(this.x, height - 100, this.width, 100)

        // if (this.x / width == 1) {
        //     noteA.play();
        // } else if (this.x / width == 2) {
        //     noteB.play();
        // } else if (this.x / width == 3) {
        //     noteC.play();
        // } else if (this.x / width == 4) {
        //     noteD.play();
        // } else if (this.x / width == 5) {
        //     noteE.play();
        // } else if (this.x / width == 6) {
        //     noteG.play();
        // }
    }
};

function mousePressed() {
    // var iDontColor = (int(soundKey * 42.5 + soundKey) % 255);
    //background(iDontColor, 255 - iDontColor, iDontColor - 50);
    if (mouseY > keyVertical && mouseY < height) {
        soundKey = int(mouseX / keySize);
        console.log(soundKey);
        keyList[soundKey].play()
        keyHistory += soundKey;
    }

}

function imgs() {

    this.make = function() {
        
        for (temp=0; temp<keyHistory.length; temp++){
        var keyDiff = (abs(keyHistory[temp - 1] - soundKey));
        if (keyDiff > 2) {
            background(255, 0, 0)
        } else {
            background(0, 255, 0);
        }
    }
image(baby, width / 2, height / 2 + 100);
}

};
