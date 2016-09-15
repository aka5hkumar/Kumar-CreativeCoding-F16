//Akash Kumar & Julia Shao
int mainRandom = int(random(0,255));
int whichRGB = int(random(0,2));
color mainColor;
color sib1;
color sib2;
int red;
int blue;
int green;

void setup()
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
        sib1=color(red+int(random(10,20)), blue, green);
        sib2=color(red+int(random(10,20)), blue, green);
        println(sib1);
        println(sib2);

      }
      else if (whichRGB == 1)
      {
        sib1=color(red, blue+int(random(10,20)), green);
        sib2=color(red, blue+int(random(10,20)), green);
        println(sib1);
        println(sib2);
      }
      else 
      {
        sib1=color(red, blue, green+int(random(10,20)));
        sib2=color(red, blue, green+int(random(10,20)));
        println(sib1);
        println(sib2);
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
}
void mousePressed()
{
  if (mouseY >=700 || mouseY <=800)
  {
    if (mouseX >=200 || mouseX <= 300)
    {
      println("Circle 1");
      fill(255,0,0);
      rect(0,0,1000,1000);
    }
    if (mouseX >=500 || mouseX <= 600)
    {
      println("Circle 2");
      fill(0,255,0);
      rect(0,0,1000,1000);
    }
    if (mouseX >=800 || mouseX <= 900)
    {
     println("Circle 3");
     fill(255,0,0);
     rect(0,0,1000,1000);
    }
  else
  {
      println("Out of bounds");
     fill(0,0,0);
     rect(0,0,1000,1000);
  }
  
}
else
{
  println("Out of bounds");
     fill(0,0,0);
     rect(0,0,1000,1000);
}
}