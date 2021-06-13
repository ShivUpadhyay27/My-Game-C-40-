var bimage ; 
var background1;
var obstacleImage1 ;
var x1 =0;
var x2;
var scrollSpeed = 5;
var random1;

function preload(){
  bimage = loadImage("bgImage.png");
  obstacleImage1 = loadImage("obs1.png");
  obstacleImage2 = loadImage("obs2.png");
  obstacleImage3 = loadImage("obs3.png");
  obstacleImage4 = loadImage("obs4.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  x2 = width;
  // background1 = createSprite(350,0,500,500);
  // background1.addImage(bimage);
  // background1.scale = 0.2;
  
}

function draw(){
background("white");
  //background1.velocityX = -3;
 image(bimage,x1,0,width,height);
 image(bimage,x2,0,width,height);
 
  
  
  x1 -=scrollSpeed;
  x2 -=scrollSpeed;
  if (x1<=-width){
    x1=width;
  }
  if(x2<=-width){
    x2=width;
  }
  createObstacles();

  drawSprites();
}

function createObstacles(){
   if(frameCount % 170 === 0){
      obstacles = createSprite(width+10,height-170);
      obstacles.velocityX=-5;
      random1=Math.round(random(1,4));
      switch(random1){
        case 1:obstacles.addImage(obstacleImage1)
        obstacles.scale=0.4
        break;
        case 2:obstacles.addImage(obstacleImage2)
        obstacles.scale=0.1
        break;
        case 3:obstacles.addImage(obstacleImage3)
        obstacles.scale=0.1
        break;
        case 4:obstacles.addImage(obstacleImage4)
        obstacles.scale=0.1
        break;
        default:
          break;
      }
   }
}