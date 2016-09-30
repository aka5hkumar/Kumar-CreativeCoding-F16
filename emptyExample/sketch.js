var start = 0;
var size = 25;  
function setup() {
    createCanvas(1000, 1000);
    background(200);
}

function draw() {
    while (start < width) {
        rect(start, height / 2, 30, 20);
        myPos = myPos + 50;
    }
}
