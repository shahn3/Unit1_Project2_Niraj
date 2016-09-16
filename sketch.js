var b;
var positionX = 75;
var positionY = 375;
var speedX = 3;
var rectX = [];
var rectY = [];
var numRects = 50;
var gameOver = false;
var rectW = 40;
var rectH = 40;

function setup() 
{
  createCanvas(750, 750);
  b = color(0, 0, 0);
  rectX = [numRects];
  rectY = [numRects];
  for (var i = 0; i < numRects; i++) 
  {
    rectX[i] = random(250, width);
    rectY[i] = random(0, height);
  }
}


function draw() 
{
  if (!gameOver) 
  {
    MoveEllipse();
    MovingObjects();
    CollidingObjects();
  } else {
    background(0);
    textSize(64);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
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
  for (var i = 0; i < numRects; i++) 
  {
    var dir = random(0, -2);
    rect(rectX[i], rectY[i], rectW, rectH);
    rectX[i] = rectX[i] + (dir * 2);
  }
}

function CollidingObjects() 
{
  var leftSide   = positionX - 10;
  var rightSide  = positionX + 10;
  var topSide    = positionY - 10;
  var bottomSide = positionY + 10;

  for (var i = 0; i < rectX.length; i++) 
  {
    if (leftSide < rectX[i] + rectW && leftSide > rectX[i] ||
       rightSide < rectX[i] + rectW && rightSide > rectX[i]) 
      {
        if  (topSide > rectY[i] + rectH && topSide < rectY[i] ||
          bottomSide > rectY[i] && bottomSide < rectY[i] + rectH)
        {
          gameOver = true;
        }
      }
  }

}