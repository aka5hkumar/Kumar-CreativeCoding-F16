var citiData;
var padding = 20;
var ten;
var twenty;
var thirty;
var fourty;
var fifty;
var sixty;
var seventy;
var eighty;
var ninety;
var hundred;
var number = [ten, twenty, thirty, fourty, fifty, sixty, seventy, eighty, ninety, hundred];
var decimal = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

function preload() {
    citaData = loadJSON("assets/stations.json");
}

function setup() {
    createCanvas(1000, 1000);
    background(123);
}

function draw() {
    fill(134, 165, 92);
    stroke(5);
    background(255);
    for (var i = 0; i < citiData.length; i++) {
        for (var k = 0; j < number.length; j++) {
            if (citiData.totalDocks[i] / citiData.availableDocks[i] >= 0 && citiData.totalDocks[i] / citiData.availableDocks[i] <= 0.1); {
                number[j]++;
            }
            if (citiData.totalDocks[i] / citiData.availableDocks[i] >= decimal[j] && citiData.totalDocks[i] / citiData.availableDocks[i] <= decimal[j + 1]); {
                number[j]++;
            }
        }
    }
    for (k = 0; k < decimal.length; k++) {
        fill(255, 255, 0);
        rect(0, k * 100, number[k], 10)
    }
}
