var fairy, fairyImage;
var star, starImage;
var starnight, starnightImage; 
function preload()
{
  fairyImage= loadAnimation("fairy1.png", "fairy2.png");
  starImage= loadImage("star.png");
  starnightImage= loadImage("starnight.png");
}

function setup() {
  createCanvas(800, 750);
  fairy= createSprite(300,300);
  fairy.addAnimation("fairy",fairyImage);
  
  star= createSprite(600,200);
  star.addAnimation("star", starImage);

  starnight= createSprite(100,300);
  starnight.addAnimation("starnight",starnightImage);
}


function draw() {
  background("starnightImage");
  if (keyIsDown("left_arrow")) {
    fairy.x=-2;
  }
  if (keyIsDown("right_arrow")) {
    fairy.x=2;
  }
drawSprites();
}