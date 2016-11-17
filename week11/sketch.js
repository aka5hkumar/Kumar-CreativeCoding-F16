var myData;
var padding=20;
function preload()
{
	myData=loadJSON("assets/heights.json");
}

function setup()
{
	createCanvas(600,600);
	println(myData.animals)
	background(123);

}

function draw()
{	
	fill(134,165,92);
	stroke(5);
	background(255);
	for(var i =0; i < myData.animals.length; i++)
	{
		ellipse(padding+100*i, 10*myData.animals[i].height, 15,15);
		line(padding+100*i, 10*myData.animals[i].height, padding+100*(i+1), 10*myData.animals[i+1].height);
	}
}
