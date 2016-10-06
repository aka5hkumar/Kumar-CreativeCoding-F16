function setup() {
    createCanvas(1000, 1000);
    background(255);

}

function draw() {
    fill(255, 0, 0);
    noStroke();
    push();
    translate(width / 3, height / 2);
    rotate(PI / 4);
    rect(0, 0, 100, 100);
    pop();
    push();
    translate(width / 2, height / 2);
    rotate(PI / 6);
    rect(0, 0, 100, 100);
    pop();
    push();
    translate(width / (3/2), height / 2);
    rotate(PI / 8);
    rect(0, 0, 100, 100);
    pop();

    for(i=1; i<=10; i++)
    {
      push();
      fill(0,255-i,255-i);
      translate(width-100*i, height / 3);
      rotate(PI/5-i);
      rect(0, 0, 100, 100);
      pop();
  }

}
