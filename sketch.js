var b;
var positionX = 75;
var positionY = 375;
var speedX = 3;
var rectX = [];
var rectY = [];
var numRects = 50;
var gameOver= false;

function setup() 
{
  createCanvas(750, 750);
  b = color(0, 0, 0);
  rectX = [numRects];
  rectY = [numRects];
   for(var i=0; i< numRects; i++)
  {
    rectX[i] = random(250,width);
    rectY[i] = random(0,height);
  }
}


function draw() 
{
  if (!gameOver)
  {
  MoveEllipse();
  MovingObjects();
  CollidingObjects();
  }
  else 
  {
    background(0);
    textSize(64);
    textAlign(CENTER);
    text("Game Over", width/2, height/2);
  }
}

function MoveEllipse() 
{
  background(b);
  fill(200, 221, 176);
  noStroke();
  ellipse(positionX, positionY, 20, 20);
  if (keyIsDown(UP_ARROW) && positionY > 37.5) 
  {
    positionY -= 4;
  }

  if (keyIsDown(DOWN_ARROW) && positionY < 712.5) 
  {
    positionY += 4;
  }

}

function MovingObjects() 
{
  fill(0, 221, 176);
  for(var i=0; i< numRects; i++)
  {
     var dir = random(0,-2);
     rect(rectX[i], rectY[i], 40, 40);
     rectX[i] = rectX[i] + (dir * 2);
  }
}

function CollidingObjects ()
{
  for(var i=0; i < numRects; i++)
  {
    newPosX=positionX+15;
    newPosY=positionY+15;
    
  if (rectX[i] == positionY)
  {
    gameOver= true;
  }
  }
}



