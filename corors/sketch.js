var colorData;
var colorName;
var colorHex;

function preload() {
    colorData = loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json");
}

function setup() {
    createCanvas(1000, 1000);
    background(123);
}

function draw() {
	var i=int(random(0,colorData.colors.length));
	shape(colorData.colors[i].hex,mouseX,mouseY);
}

function shape(color,_x,_y)
{
 this.colorValue=color;
 this.x=_x;
 this.y=_y;

 	fill(colorValue);
 	ellipse(x, y,30,30);

}

function mousePressed()
{
	var i=int(random(0,colorData.colors.length));
	shape(colorData.colors[i].hex, mouseX, mouseY);
}