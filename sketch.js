
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,450);
  
  monkey = createSprite(40,370,10,10);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale  = 0.1;
 
  
  ground = createSprite(230,400,450,10);
  ground.x = ground.width/2;
  
  score = 0;
  
}


function draw() {
  background("green");
  
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")){
     monkey.velocityY = -12;
   }
  
   monkey.velocityY = monkey.velocityY + 0.7;
   monkey.collide(ground);
  
   stroke("black");
   textSize(20);
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100,50);
  
  
   spawnbanana();
   SpawnObstacles();
  
  
  
   drawSprites(); 
  
}

function spawnbanana() {
  //write code here to spawn the Obstacles
 
 
  if (frameCount % 185 === 0) {
   banana =      createSprite(Math.round(random(90,400)),Math.round(random(120,200)),10,10);                                                                                
   banana.addImage("bananaImage1",bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -2;
   banana.lifetime = 350;
  } 
  }
function SpawnObstacles(){
  if(frameCount % 300 === 0) {
    obstacle = createSprite(Math.round(random(200,400)),380,10,10)
  obstacle.addImage("rock",obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 350;  
  obstacle.collide(ground);  
  }
  
}







