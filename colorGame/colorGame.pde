int mainRandom = int(random(0,255));
int whichRGB = int(random(0,2));
color mainColor;
color sib1;
color sib2;
int red;
int blue;
int green;

void Setup()
{
  size(1000,1000);
  background(#FFFFFF);
  red = int(random(0,255));
  blue = int(random(0,255));
  green = int(random(0,255));
  mainColor=color(red,blue,green);
    for(int i=1; i<4; i++)
    {
      if (whichRGB == 0)
      {
        sib1=color(red+int(random(1,5)), blue, green);
        sib2=color(red+int(random(1,5)), blue, green);

      }
      else if (whichRGB == 1)
      {
        sib1=color(red, blue+int(random(1,5)), green);
        sib2=color(red, blue+int(random(1,5)), green);
      }
      else 
      {
        sib1=color(red, blue, green+int(random(1,5)));
        sib2=color(red, blue, green+int(random(1,5)));
      }
    }
}

void draw()
{
  fill(mainColor);
  ellipse(500,300,200,200);
  fill(sib1);
  ellipse(250,750,100,100);
  fill(mainColor);
  ellipse(550,750,100,100);
  fill(sib2);
  ellipse(850,750,100,100);

  if (mouseY >=700 || mouseY <=800)
  {
    if (mouseX >=200 || mouseX <= 300)
    {
      println("Circle 1");
      background(255,0,0);
    }
    if (mouseX >=500 || mouseX <= 600)
    {
      println("Circle 2");
      background(0,255,0);
    }
    if (mouseX >=800 || mouseX <= 900)
    {
     println("Circle 3");
      background(255,0,0);
    }
  }
}