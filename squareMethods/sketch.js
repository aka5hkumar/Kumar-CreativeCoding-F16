
var triArray=[];
function setup()
{
  createCanvas(1000,1000);
  for (var i=0; i<5;i++)
  {
    triArray[i]= new tri(mouseX, mouseY, random (1,10));
  }

}
function draw()
{
  for (var i =0; i< triArray.length; i++)
  {
    triArray[i].animate();
    triArray[i].display();

  }
}
function tri(startx, starty, _vel)
{
  this.x=startx;
  this.y=starty;
  this.vel=_vel;



  this.animate = function()
  {
    this.x=this.vel;
    if(this.x > width || this.x<0)
    {
      this.vel=-vel;
    }
  }

  this.display = function()
  {
      triangle(this.x,this.y,this.x+this.vel,this.y,this.x+this.vel/2,this.y+this.vel);
  }

}
