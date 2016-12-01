var input;
var inputButton;
var myInputValue;
var baseUrl;
var API_key;
var myTerms;
var url;
var globalData;
var counter;
var myInputValue;

function setup() {
 	counter=0
	createCanvas(windowWidth, windowHeight);

	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
	API_key = "ba520563a24a493ca36f9b1f8c0f8c18"
	myData = loadJSON(url, gotData);
	console.log(url);
	input = createInput("Favorite fruit?");
	input.position(400,150);
	inputButton = createButton("Submit");
	inputButton.position(530, 150);
	inputButton.mousePressed(getFruit);

}

function gotData(myData){

	globalData = myData;
	myInputValue = input.value();
	console.log(myInputValue);
	console.log(globalData);

}

function getFruit(){

	url = baseUrl + "?api-key="+ API_key + "&q=" + myInputValue;
	myData = loadJSON(url, gotData);
	background(255);

}

function draw() {
	textSize(20);
	background(255);
	offset = 30;

	if (globalData){
		for (var i=0; i<=3; i++){
			if(globalData.response.docs[i].abstract){
				//console.log(globalData.response.docs[i].abstract);
				text(globalData.response.docs[i].abstract, 10,100 + offset*i);
			}
		}	

	}
  
}
