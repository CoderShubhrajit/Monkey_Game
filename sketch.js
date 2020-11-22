
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(550,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("runner",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(275,375,1100,10);
  ground.x = ground.width/2;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();

  score = 0;
}


function draw() {
  background("lightgreen");
  text("Press Space to jump",220,75); 
  if (keyDown("space"))
   {
     monkey.velocityY = -15;
   }
  
  monkey.velocityY = monkey.velocityY + 1;
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  ground.velocityX = -5;
  if(foodGroup.isTouching(monkey)){foodGroup.destroyEach();}
  fill("black");
  textSize(20);
  text("Survival time : "+score+" seconds",180,50);
  score = Math.round(frameCount/35);
  
  food();
  rock();
 if (monkey.x<50) {   text("Press CTRL+Shift+R to restart",165,200)} 
  monkey.collide(ground);

 monkey.collide(obstacleGroup); drawSprites();
}

function food()
{
  if (frameCount%80 === 0)
    {
      banana = createSprite(550,random(100,200),10,10);
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -5;
      banana.lifetime = 120;
      
      foodGroup.add(banana);
    }
}

function rock()
{
  if (frameCount%300 === 0)
    {
      obstacle = createSprite(550,320,10,10);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.3;
      obstacle.velocityX = -5;
      obstacle.lifetime = 120;
      
      obstacleGroup.add(obstacle);
    }
}




