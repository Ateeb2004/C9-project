var box;

function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,50,50);
  box.shapeColor = "red";

}

function draw() 
{
  background(0);

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 5;
  }
  if(keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 5;
  }

drawSprites();
}




