var inputValues;
var inputData;
var sunData;
var sunValues;
var lat;
var long;
var offset;
var city;
var url;
var sunrise;
var sunset;
var cityNum;
var globalData;

function setup() {
    var inputValues = ("/assets/cities.json");
    inputData = loadJSON(inputValues, getData);
    console.log(inputData.cities);
    createCanvas(600, 600);
    cityNum = 0;

}

function draw() {
    sunData(cityNum);
    text("In", city);
    text("Sunrise is", sunrise);
    text("and sunset is", sunset);
    text("Click to load another city");
}

function getData(inputData) {

    globalData = inputData;
    console.log(globalData);

}


function sunData(whatCity) {
    whatCity = this.cityNum;
    sunValues = ("http://api.sunrise-sunset.org/json?");
    city = inputData.cities[cityNum].name;
    lat = inputData.cities[cityNum].lat;
    long = inputData.cities[cityNum].long;
    offset = inputData.cities[cityNum].time_off;
    url = sunValues + "lat=" + lat + "&lng=" + long + "&date=today%20";
    sunrise = sunValues.results.sunrise;
    sunrise = sunrise + offset;
    sunset = sunValues.results.sunrise;
    sunset = sunset + offset;
    console.log(sunrise);
    console.log(sunset);
    sunData = loadJSON(url, getData);
}


function mouseClicked() {
    cityNum++
    sunData(cityNum);
}
