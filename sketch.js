var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sound;
var Mateo,MateoImage;
var Mateo2,Mateo2Image;
var backgroundImg, bAckground;
var villan,villan2,villan3,villans;
var rand;
var villanGroup;
var code,codeI;
var sound2;
var score=0;
function preload(){

  MateoImage=loadImage("Mateoo.png");
  Mateo2Image=loadImage("Mateo.fighiting.png");
  sound=loadSound("song.mp3");
  backgroundImg=loadImage("IMH.jpg")
  villan=loadImage("1.png");
  villan2=loadImage("2.png");
  villan3=loadImage("3.png");
  codeI=loadImage("codex.jpg");
  sound2=loadSound("Elena of Avalor - The Magic Within You Official Disney Channel Africa.mp3")
}

function setup() {
 createCanvas(windowHeight, windowWidth);
  
 villanGroup=new Group();
  
  //sound.loop(); 
  sound.play();
  bAckground=createSprite(300,300)
  bAckground.addImage(backgroundImg);
  bAckground.scale=3;
 // bAckground .velocityY=5;
     Mateo2=createSprite(width-100,50);
    Mateo2.addImage(Mateo2Image);
    Mateo2.scale=0.2;

   Mateo=createSprite(300,height-500);
  Mateo.addImage(MateoImage);
  Mateo.scale=0.2;
  
  code=createSprite(300,20);
  code.addImage(codeI);
  code.scale=0.5;
  
 //Mateo.debug=true;
  Mateo.setCollider("circle",0,30,360);
}

function draw() {
  background(234);
  //createEdgeSprites;


  if (gameState===PLAY){
   // sound.play();
  bAckground.velocityY=-2;
 // Mateo2.visible=false;
  if (bAckground.y <100){
   bAckground.y=300; 
    }
  Mateo.visible=true;
    code.visible=true;
  
  if(Mateo.isTouching(code)||Mateo.isTouching(villanGroup)){
        gameState=END;
    
  
    
  }
    if(Mateo.isTouching(code)){
      score=score+1;
      
    }
    if(Mateo.isTouching(villanGroup)){
      score=score-1;
       
      
    }
   if (score===5){
     
     score=0
     
   }
    if (score===-5){

    score=0
    }
    
    
    if(keyDown("right_arrow")){
  Mateo.x=Mateo.x+3;
  
}
    if(keyDown("left_arrow")){
      Mateo.x=Mateo.x-3;
    }
  if(keyDown("up_arrow")){
      Mateo.y=Mateo.y-3;
    }
  if(keyDown("down_arrow")){
      Mateo.y=Mateo.y+3;
    
  }
   
    supervillans();
  
  
    if(sound2.isPlaying()){
     sound2.stop();
     sound.play();
    }
  
  }
 
 // villangroup.add(villans);
  
 
  else if(gameState===END){
     
 // sound2.play();
  //  noLoop(sound);
  
   // Mateo2.visible=true;
    background(101);
     Mateo.veloctiyX=0;
    Mateo.velocityY=0;
   Mateo.visible=false;
    code.visible=false;
    villanGroup.destroyEach();
        textSize(30)
     fill("royalBlue");
     stroke("white");
     text("Game Over ",250,250);
     text("Press R to restart",250,330);
     text("If you touched the book you won but if u  "                                                                        ,1,380);
    text(" touched the villan you lost now think what                                                                               ",1,420);
    text("you did. If u win you get 1 point if you lose   ",1,450);
    text("then u lose 1 point at the end when you want  ",1,490);
     text("to end count the score and  tell me.",1,520);
    text("*Hope you like the song keep playing to hear ",1,560)
    text("both they are amazing.",1,590);
    if(sound.isPlaying()){
     sound.stop();
     sound2.play();
    }
    
    if (keyDown("r")){
       gameState = PLAY;
       Mateo.x=300;
     Mateo.y=500;
     /* Mateo2.destroy();*/
     }
    
  }
  //villans.depth=Mateo.depth;
//villans.depth=Mateo.depth;
  //Mateo.depth+=1;
  if (keyDown("r")){
       gameState = PLAY;
       Mateo.x=300;
      Mateo.y=500;
     }
  drawSprites();
  textSize(30);
  fill("yellow");
  stroke("green");
   text("Score: "+ score, 400,30)
  textSize(25);
  fill("lightblue");
    text("get the book!",110,50);
}

function supervillans(){
  //Mateo.bounceoff(code);
  if (frameCount%60===0){
   villans=createSprite(300,100);
    villans.x=Math.round(random(100,500));
  villans.velocityY=3;
  villans.scale=0.2;
    villans.lifetime=120;
  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: villans.addImage(villan);
              break;
      case 2: villans.addImage(villan2);
              break;
      case 3: villans.addImage(villan3);
              break;
      
      default: break;
    }
      villanGroup.add(villans);
  
  }
  
  
 
}
  
   