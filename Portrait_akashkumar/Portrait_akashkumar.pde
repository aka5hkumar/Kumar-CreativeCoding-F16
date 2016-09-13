//Akash Kumar
//Creative Coding B
background(57, 148, 196, 60); //Blue
size(1000,1000);
color white = #FFFFFF;
color black = #000000;
color darkBrown = #8C3B14;
color lightBrown = #C46B3F;
color lips = #1B021C;

////Draw
noStroke();

//Face
fill(darkBrown);
rect(0,200,1000,1000);

//Nose
fill (lightBrown);
triangle(475,550,475,650,575,600);

//Eyes
fill(white);
ellipse(250,400,300,100);
ellipse(750,400,300,100);

///Main Face components
fill (black); 

//Hair Spikes
triangle(0,150,150,0,300,150);
triangle(350,150,500,0,650,150);
triangle(700,150,850,0,1000,150);

//Hair
rect(0,150,1000,50);

//Glasses
rect(410,375,185,15);

//EyeBrows
rect(125,300,250,25);
rect(625,300,250,25);

//Eyes
ellipse(250,400,50,50);
ellipse(750,400,50,50);

//Beard
triangle(0,850,0,1000,150,1000);
triangle(1000,850,1000,1000,850,1000);
triangle(500,900,550,975,450,975);

///Border
strokeWeight(10);

//Mouth
stroke(lips);
rect(350,800,300,25);

//Glasses
stroke(black);
fill(white,50);
rect(90,340,320,125);
rect(590,340,320,125);