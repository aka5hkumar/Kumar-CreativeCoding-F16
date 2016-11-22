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

function setup() {
        var inputValues = "/assets/cities.json";
    inputData = loadJSON(inputValues);
    cityNum = 1;
    createCanvas(600, 600);
    sunValues = "http://api.sunrise-sunset.org/json?";
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

    sunData = loadJSON(url);

}



function draw() {
    text(city, sunrise, sunset);
}

function mouseClicked() {
    cityNum++
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
    sunData = loadJSON(url);

}
