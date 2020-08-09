var backImage,backgr, ground;
var bananaImg, obstacleImg;
var foodGroup, obstacleGroup;
var score, playerRunning, player;


function preload(){
  backImage=loadImage("jungle2.jpg");
  playerRunning=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImg=loadImage("Bananas.png");
  obstacleImg=loadImage("stone.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  
  backgr.velocityX = -10;
  
  backgr.x = backgr.width/2;
  
  ground = createSprite(400, 400, 800, 20);
  ground.visible = false;
  
  player = createSprite(200, 300, 20, 20);
  player.addAnimation(playerRunning);
  
  var score = 0;
  
  
}

function draw() {
  
  background(255);
  
  if(backgr.x<0){
    
     backgr.x = backgr.width/2;
     
     }
  
  if(foodGroup.isTouching(player)){
     score = score+2;
     }
  
  if(obstacleGroup.isTouching(player)){
     player.scale = 0;
     }
  
  switch(score){
    case 10: player.scale = 0.12;
    break;
    case 20: player.scale = 0.14;
    break;
    case 30: player.scale = 0.16;
    break;
    case 40: player.scale = 0.18;
    break;
    default:break;
         }
  
  drawSprites();
  
  fill("black");
  textSize(40);
  text("score:"+score, 400, 100);
}
function food(){
  if(frameCount%80===0){
    var banana = createSprite(400, random(120, 200), 10, 10);
    banana.addAnimation(bananaImg);
    banana.velocityX = -8;
    banana.lifetime = 50;
    banana.scale = 0.05;
    foodGroup.add(banana);
  }
}