var fourtyfive=0.785398;

function setup() {
    createCanvas(1000, 1000);
    background(255);
}
function draw() {
    fill(5);
    rotate(-fourtyfive);
    for(i=0; i<=1200; i+=200)
    {
      rect(-800, i, 1999, 100);
      println("top",i);
    }
    // rect(-800, 1200, 1999, 100);
    // rect(-800, 1000, 1999, 100);
    // rect(-800, 800, 1999, 100);
    // rect(-800, 600, 1999, 100);
    // rect(-800, 400, 1999, 100);
    // rect(-800, 200, 1999, 100);
    // rect(-800, 0, 1999, 100);

    noStroke();
    fill(255);
    rotate(fourtyfive);
    triangle(1000,0,1000,1000,70,0);
    fill(5);
    rotate(fourtyfive);
    for (j=50; j<=450; j+=200)
    {
        rect(-50, -j, 1999, 100);
        println("bottom",j);
    }
    // rect(-50, -50, 1999, 100);
    // rect(-250, -250, 1999, 100);
    // rect(-450, -450, 1999, 100);


}
