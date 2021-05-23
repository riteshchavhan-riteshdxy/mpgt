let gui;
let r;

var time = 1;
var angle = 5;
var once = 5;
var occur = 2;
var beat = 5;//enemy can't beat
var move = 5;//player movement 
var bullets = 40;//player bullets 



var gameState = "start";
var level1 = 1;
var level2 = 2;



function preload(){
playerImg=loadAnimation("image/player.png","image/player-frame2.png","image/playerImg-3.png","image/player4.png");
playerImg2=loadAnimation("image/dan.png","image/lplayer-frame2.png","image/lplayerImg-3.png","image/lplayer4.png");
rightImg=loadImage("image/right.png");
groundImg=loadImage("image/ground.jpg");
groundImg2=loadImage("image/ground2.jpg");
colliderImg=loadImage("image/collider.jpg");
waterImg=loadImage("image/water.png");
woodImg=loadImage("image/wood.png");
treeImg=loadImage("image/tree.png");
beatImg=loadImage("image/beat1.png");
beatImg3=loadImage("image/punch.png");
beatImg2=loadImage("image/lbeat1.png");
beatImg4=loadImage("image/lpunch.png");
enemyImg=loadAnimation("image/enemy.png","image/enemy2.png","image/enemy4.png","image/enemy3.png");
enemyImg2=loadAnimation("image/lenemy.png","image/lenemy2.png","image/lenemy4.png","image/lenemy3.png");
punchSound=loadSound("sound/PUNCH.mp3");
enemySound=loadSound("sound/enemyBeat.mp3");
song=loadSound("sound/song.mp3");
jumpSound=loadSound("sound/Woosh.mp3");
pistolSound=loadSound("sound/fire.mp3");
shootSound=loadSound("sound/shoot.mp3");
enemyBeat=loadAnimation("image/enemy4.png","image/enemyBeat.png","image/enemyBeat.png");
enemyBeat2=loadAnimation("image/lenemy4.png","image/enemyBeat2.png","image/enemyBeat2.png");
spikeImg=loadImage("image/spike.png");
obstacleImg=loadImage("image/obstacle.jpg");
BeamImg=loadImage("image/Beam.png");
leftImg=loadImage("image/left.png");
punchImg=loadImage("image/punchButton.png");
jumpImg=loadImage("image/jump.png");
birdImg=loadAnimation("image/bird.png","image/birdframe2.png");
birdImg2=loadAnimation("image/bird3.png","image/birdframe4.png");
ballImg=loadImage("image/ball.png");
menuImg=loadImage("image/menu.png");
gunenmeyImg=loadAnimation("image/gunenemy.png","image/gunenemy2.png","image/gunenemy3.png");
gunenmeyImg2=loadAnimation("image/rgunenemy.png","image/rgunenemy2.png","image/rgunenemy3.png");
bulletImg=loadImage("image/bullet.png");
bulletImg2=loadImage("image/bullet2.png");
gunImg=loadImage("image/gun.png");
shootImg=loadImage("image/shoot.png");
playergunImg=loadAnimation("image/playershoot2.png","image/rplayershoot.png");
playergunImg2=loadAnimation("image/playershoot.png","image/lplayershoot.png");
foodImg=loadImage("image/food.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  gui = createGui();

   r = createButton("Button",windowWidth/2-280,windowHeight/2+120, 70, 70);
   l = createButton("Button",windowWidth/2-380,windowHeight/2+120, 70, 70);
   p = createButton("Button",windowWidth/2+310,windowHeight/2+120, 70, 70);
   j = createButton("Button",windowWidth/2+220,windowHeight/2+120, 70, 70);

   levelbutton1 = createButton("Button",windowWidth/2-230,windowHeight/2+100, 150, 70);
   levelbutton2 = createButton("Button",windowWidth/2+50,windowHeight/2+100, 150, 70);

   shootbutton = createButton("Button",windowWidth/2+120,windowHeight/2+120, 70, 70);

   hide=createSprite(windowWidth/2,windowHeight/2,1000,600);
   hide.shapeColor="lightblue"
   hide.visible=false;

   menu=createSprite(windowWidth/2,windowHeight/2);
   menu.addImage(menuImg);
   menu.scale=1.6;

   

   // creating js object

   fgroup = createGroup();
   group = createGroup();
   bgroup = createGroup();
   cgroup = createGroup();
   bulletgroup = createGroup();

song.loop();

}

function draw() {
  background("lightblue");
  drawGui();
   drawSprites();
 
 
if(gameState === "start"){
  
  camera.x=menu.x;
  camera.y=menu.y;

r.visible=false;
l.visible=false;
p.visible=false;
j.visible=false;

hide.visible=false;
menu.visible=true;


if (levelbutton1.isHeld){

  hide.visible=true;

  t1 = new Tree(windowWidth/2,windowHeight/2-80,2.3);
   t2 = new Tree(windowWidth/2+2060,windowHeight/2-80,2.3);
   t3 = new Tree(windowWidth/2+2660,windowHeight/2-80,2.3);
   t4 = new Tree(windowWidth/2+4680,windowHeight/2-80,2.3);
  
   c1 = new collider(windowWidth/2-420,windowHeight/2,0.3)
  
   g1 = new Ground(windowWidth/2+26,windowHeight/2+180,0.3);
   g2 = new Ground2(windowWidth/2+2350,windowHeight/2+180,0.3);
   g3 = new Ground(windowWidth/2+4676,windowHeight/2+180,0.3);
   
   w1 = new Water(windowWidth/2+1035,windowHeight/2+150,1.1);
   w2 = new Water(windowWidth/2+3668,windowHeight/2+150,1.1);
  
   wg1 = new Wood(windowWidth/2+755,windowHeight/2,1.1);
   wg2 = new Wood(windowWidth/2+1205,windowHeight/2,1.1);
   
  
   ob1 = new Obstacle(windowWidth/2+2650,windowHeight/2+15,windowWidth/2+2650,windowHeight/2-285);
   ob2 = new Obstacle(windowWidth/2+2850,windowHeight/2,windowWidth/2+2850,windowHeight/2-279);
  
  e1 = new Enemy(windowWidth/2+400,windowHeight/2);
  e2 = new Enemy(windowWidth/2-300,windowHeight/2);
  e3 = new Enemy(windowWidth/2-200,windowHeight/2);
  e4 = new Enemy(windowWidth/2+200,windowHeight/2);
  e5 = new Enemy(windowWidth/2+2000,windowHeight/2);
  e6 = new Enemy(windowWidth/2+2200,windowHeight/2);
  e7 = new Enemy(windowWidth/2+1900,windowHeight/2);
  e8 = new Enemy(windowWidth/2+2100,windowHeight/2);
  
  bird1 = new Bird(windowWidth/2+4400,windowHeight/2-150);
  bird2 = new Bird(windowWidth/2+4700,windowHeight/2-150);
  
  // simple objects
  
   player=createSprite(windowWidth/2-100,windowHeight/2);
   player.addAnimation("running",playerImg);
    
  health=createSprite(windowWidth/2-380,windowHeight/2-300,110,20);
  health.shapeColor="lawngreen";
  
  
wall=createSprite(windowWidth/2+400,windowHeight/2,10,700);
wall.visible=false;

wall2=createSprite(windowWidth/2+1650,windowHeight/2,10,700);
wall2.visible=false;


wall3=createSprite(windowWidth/2+2500,windowHeight/2,10,700);
wall3.visible=false;

wall4=createSprite(windowWidth/2+5050,windowHeight/2,20,700);
wall4.visible=false;

  b1=createSprite(windowWidth/2+3500,windowHeight/2);
  b1.addImage(BeamImg);
  b1.scale=0.5;
  b1.velocityX=4;
  fgroup.add(b1);
  
  b2=createSprite(windowWidth/2+4100,windowHeight/2);
  b2.addImage(BeamImg);
  b2.scale=0.5;
  b2.velocityX=4;
  fgroup.add(b2);
  
  rightbutton=createSprite(windowWidth/2-250,windowHeight/2+120);
rightbutton.addImage(rightImg);
rightbutton.scale=0.3;

leftbutton=createSprite(windowWidth/2-350,windowHeight/2+120);
leftbutton.addImage(leftImg);
leftbutton.scale=0.3;

punchButton=createSprite(windowWidth/2+350,windowHeight/2+120);
punchButton.addImage(punchImg);
punchButton.scale=0.240;

jumpButton=createSprite(windowWidth/2+250,windowHeight/2+120)
jumpButton.addImage(jumpImg);
jumpButton.scale=0.3;


gameState=level1;

}//levelbutton1 over

if (levelbutton2.isHeld){

  hide.visible=true;
  
gameState=level2;

//creating js object

t5 = new Tree(windowWidth/2,windowHeight/2-80,2.3);
t6 = new Tree(windowWidth/2+630,windowHeight/2-80,2.3);
t7 = new Tree(windowWidth/2+2650,windowHeight/2-80,2.3);
t8 = new Tree(windowWidth/2+4650,windowHeight/2-80,2.3);

c2 = new collider(windowWidth/2-420,windowHeight/2,0.3)

w3 = new Water(windowWidth/2+1660,windowHeight/2+150,1.1);
w4 = new Water(windowWidth/2+3650,windowHeight/2+150,1.1);

wg3 = new Wood(windowWidth/2+1350,windowHeight/2,1.1);
wg4 = new Wood(windowWidth/2+1800,windowHeight/2,1.1);
wg5 = new Wood(windowWidth/2+3360,windowHeight/2,1.1);
wg6 = new Wood(windowWidth/2+3800,windowHeight/2,1.1);

g4 = new Ground2(windowWidth/2+342,windowHeight/2+180,0.3);
g5 = new Ground(windowWidth/2+2642,windowHeight/2+180,0.3);
g6 = new Ground(windowWidth/2+4655,windowHeight/2+180,0.3);

e9 = new Enemy2(windowWidth/2+400,windowHeight/2);
e10 = new Enemy(windowWidth/2+500,windowHeight/2);
e11 = new Enemy2(windowWidth/2+600,windowHeight/2);
e12 = new Enemy(windowWidth/2+700,windowHeight/2);
e13 = new Enemy2(windowWidth/2+800,windowHeight/2);
e14 = new Enemy2(windowWidth/2+1000,windowHeight/2);
e15 = new Enemy2(windowWidth/2+4800,windowHeight/2);
e16 = new Enemy2(windowWidth/2+4600,windowHeight/2);

bird3 = new Bird(windowWidth/2+2700,windowHeight/2-150);
bird4 = new Bird(windowWidth/2+2500,windowHeight/2-150);

//creating simple object

player=createSprite(windowWidth/2-100,windowHeight/2);
player.addAnimation("running",playerImg);
 
health=createSprite(windowWidth/2-380,windowHeight/2-300,110,20);
health.shapeColor="lawngreen";


rightbutton=createSprite(windowWidth/2-250,windowHeight/2+120);
rightbutton.addImage(rightImg);
rightbutton.scale=0.3;

leftbutton=createSprite(windowWidth/2-350,windowHeight/2+120);
leftbutton.addImage(leftImg);
leftbutton.scale=0.3;

punchButton=createSprite(windowWidth/2+350,windowHeight/2+120);
punchButton.addImage(punchImg);
punchButton.scale=0.240;

jumpButton=createSprite(windowWidth/2+250,windowHeight/2+120)
jumpButton.addImage(jumpImg);
jumpButton.scale=0.3;

gun=createSprite(windowWidth/2-390,windowHeight/2-150);
gun.addImage(gunImg);
gun.scale=0.2;

shoot=createSprite(windowWidth/2+150,windowHeight/2+120);
shoot.addImage(shootImg);
shoot.scale=0.150;

b3=createSprite(windowWidth/2+200,windowHeight/2-100);
b3.addImage(BeamImg);
b3.scale=0.5;
fgroup.add(b3);


wall5=createSprite(windowWidth/2+1050,windowHeight/2,20,700);
wall5.visible=false;

wall6=createSprite(windowWidth/2+5050,windowHeight/2,20,700);
wall6.visible=false;

food=createSprite(windowWidth/2+500,windowHeight/2-100);
food.addImage(foodImg);
food.scale=0.150;

}//levelbutton2 over
  
}//start end 

   else if(gameState === level1){
   
 // gui start

 r.visible=true;
l.visible=true;
p.visible=true;
j.visible=true;

menu.visible=false;
 
 if (r.isHeld){
  angle=5;
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
 
    player.x=player.x+15;
    angle=5;
   
  
   }

   if (l.isHeld){
    angle=4;
    if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg2);
   }
 
      player.x=player.x-10;
      angle=4;
   }
 
   

 // gui end 
 
player.velocityY=player.velocityY+2.0;

if(player.x>windowWidth/2-18){
camera.x=player.x;
health.x=player.x-340;
rightbutton.x=player.x-250;
leftbutton.x=player.x-350;
punchButton.x=player.x+350;
jumpButton.x=player.x+250;
}



player.velocityX=0;

if (keyDown(RIGHT_ARROW)) {
  player.x=player.x+15;
  angle=5;
  
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
}
     
 if (keyDown(LEFT_ARROW)) {
 player.x=player.x-10;
 angle=4;
 
 if(frameCount % 16 === 0){
 player.addAnimation("running",playerImg2);
}
  } 

  

  

  if(b1.x>windowWidth/2+3700){
    b1.velocityX=-4;
  }

  if(b1.x<windowWidth/2+3400){
    b1.velocityX=4;
  }


  if(b2.x>windowWidth/2+4100){
    b2.velocityX=-4;
  }

  if(b2.x<windowWidth/2+3900){
    b2.velocityX=4;
  }


  
  for(var f = 0; f < fgroup.length; f++){
    if(fgroup.get(f).isTouching(player)){
     player.collide(fgroup);
    if(keyDown(UP_ARROW)){
           player.velocityY=-29;
            }
 if (j.isHeld){
   player.velocityY=-29;
  }
 }
     } 


    


     if(player.isTouching(wall2)){
      wall2.x=windowWidth/2+1649;
    }
    
    if(wall2.x === windowWidth/2+1649){
      e5.display();
      e6.display();
      e7.display();
      e8.display();
    }

    if(player.isTouching(wall4)){
      health.width=5;
    }
    
if(health.width<10){
  gameState="start";

player.destroy();
health.destroy();
wall.destroy();
wall2.destroy();
wall3.destroy();
b1.destroy();
b2.destroy();
rightbutton.destroy();
leftbutton.destroy();
punchButton.destroy();
jumpButton.destroy();

e5.display();
e6.display();
e7.display();
e8.display();

}

bullets=40;

  //display the object

  t1.display();
  t2.display();
  t3.display();
  t4.display();

 g1.display();
 g2.display();
 g3.display();

 w1.display();
 w2.display();
 
 ob1.display();
 ob2.display();

 c1.display();

 wg1.display();
 wg2.display();

e1.display();
e2.display();
e3.display();
e4.display();

bird1.display(windowWidth/2+4300,windowWidth/2+5000);
bird2.display(windowWidth/2+4300,windowWidth/2+5000);

}//level1 end

else if(gameState === level2){
  r.visible=true;
  l.visible=true;
  p.visible=true;
  j.visible=true;
  
  menu.visible=false;


  player.velocityY=player.velocityY+2.0;

  if(player.x>windowWidth/2-18){
  camera.x=player.x;
  health.x=player.x-340;
  rightbutton.x=player.x-250;
  leftbutton.x=player.x-350;
  punchButton.x=player.x+350;
  jumpButton.x=player.x+250;
  gun.x=player.x-390;
  shoot.x=player.x+150;
  }
  
  //gui started

  if (r.isHeld && move === 5){
    angle=5;
    if(frameCount % 16 === 0){
      player.addAnimation("running",playerImg);
     }
   
      player.x=player.x+15;
      angle=5;
     
    
     }
  
     if (l.isHeld && move === 5){
      angle=4;
      if(frameCount % 16 === 0){
      player.addAnimation("running",playerImg2);
     }
   
        player.x=player.x-10;
        angle=4;
     
 }



 if (shootbutton.isHeld && bullets>0){
   move=4;
if(angle === 5){
  player.addAnimation("running",playergunImg);
 if(frameCount % 5 === 0){
     var bullet = createSprite(player.x+60,player.y+15);
      bullet.addImage(bulletImg2);
      bullet.scale=0.1;
     bullet.velocityX=20;
      bullet.lifetime=30;
      shootSound.play();
      bullets=bullets-1;
      bulletgroup.add(bullet);
      }
    }
      if(angle === 4){
        player.addAnimation("running",playergunImg2);
        if(frameCount % 5 === 0){
           var bullet = createSprite(player.x-60,player.y+15);
            bullet.addImage(bulletImg);
            bullet.scale=0.1;
           bullet.velocityX=-20;
            bullet.lifetime=30;
            shootSound.play();
            bullets=bullets-1;
            bulletgroup.add(bullet);
            }
          }
 }

 if(shootbutton.isReleased){
   move=5;
 }

  
  ///gui over

  textSize(40);
  fill("white");
text(""+bullets,gun.x-25,windowHeight/2-100)

  player.velocityX=0;
  
  if (keyDown(RIGHT_ARROW) && move === 5) {
    player.x=player.x+15;
    angle=5;
    
    if(frameCount % 16 === 0){
      player.addAnimation("running",playerImg);
     }
  }
       
   if (keyDown(LEFT_ARROW) && move === 5) {
   player.x=player.x-10;
   angle=4;
   
   if(frameCount % 16 === 0){
   player.addAnimation("running",playerImg2);
  }
    } 

    for(var i = 0; i < bulletgroup.length; i++){
      if(bulletgroup.get(i).isTouching(bgroup)){
        bulletgroup.get(i).destroy();
        bgroup.get(i).destroy();
          }
    }
  

    for(var f = 0; f < fgroup.length; f++){
      if(fgroup.get(f).isTouching(player)){
       player.collide(fgroup);
      if(keyDown(UP_ARROW)){
             player.velocityY=-29;
              }
   if (j.isHeld){
     player.velocityY=-29;
    }
   }
       } 


if(player.isTouching(food)){
  health.width=100;
food.destroy();
bullets=bullets+10;
}

if(health.width<10){
  gameState="start";

player.destroy();
health.destroy();
wall6.destroy();
wall5.destroy();
b3.destroy();
rightbutton.destroy();
leftbutton.destroy();
punchButton.destroy();
jumpButton.destroy();
food.destroy();
shoot.destroy();
gun.destroy();
}

if(player.isTouching(wall6)){
  health.width=9;
}


    //display the object

  t5.display();
  t6.display();
  t7.display();
  t8.display();


  c2.display();

 g4.display();
 g5.display();
 g6.display();

 wg3.display();
 wg4.display();
 wg5.display();
 wg6.display();

 w3.display();
 w4.display();

 e9.display();
e10.display();
 e11.display();
 e12.display();
 e13.display();
 e14.display();
 e15.display();
 e16.display();

 bird3.display(windowWidth/2+2400,windowWidth/2+3000);
 bird4.display(windowWidth/2+2400,windowWidth/2+3000);

}//level2 end

}



function punch(){

  once=4;
  once2=4;

  
    if(angle === 5){
  
  
    rand = Math.round(random(1,2));
    switch(rand) {
      case 1: player.addAnimation("running",beatImg);
              break;
      case 2:  player.addAnimation("running",beatImg3);
              break;
      default: break;
    }
   }
  
   if(angle === 4){
    rand = Math.round(random(1,2));
    switch(rand) {
      case 1: player.addAnimation("running",beatImg2);
              break;
      case 2:  player.addAnimation("running",beatImg4);
              break;
      default: break;
    }
   }

  
  
  }


 
  

function touchMoved() {
  // do some stuff
  return false;
}










