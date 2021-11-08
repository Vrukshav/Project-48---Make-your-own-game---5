var pc,back;

var bird;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;

var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;

var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;

var wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;

var wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50;

var wall51,wall52,wall53,wall54;

var wallh,wallv;

var diamond,diamondimg,goldcoin,goldcoinimg;

var goldcoin1,goldcoin2,goldcoin3,goldcoin4,goldcoin5,goldcoin6,goldcoin7,goldcoin8,goldcoin9;

var diamond1,diamond2,diamond3,diamond4,diamond5,diamond6,diamond7,diamond8,diamond9;

var diamond1img,diamond2img,diamond3img,diamond4img,diamond5img,diamond6img,diamond7img,diamond8img,diamond9img;

var gameState ;

var pig,pig1,pig2,pig3,pigimg

var END = 0

var WIN = 1

var scored = 0,scoreg = 0;

var egg,eggimg;

function preload(){
  pc = loadImage("PC.png");

  back = loadImage("back.png");

  wallh = loadImage("wallh.png");

  wallv = loadImage("wallv.png");
  
  diamondimg = loadImage("diamond1.png");

  goldcoinimg = loadImage("coin.png");

  diamond1img = loadImage("diamond1.png");

  diamond2img = loadImage("diamond2.png");

  diamond3img = loadImage("diamond3.png");

  diamond4img = loadImage("diamond4.png");

  diamond5img = loadImage("diamond5.png");

  diamond6img = loadImage("diamond6.png");

  diamond7img = loadImage("diamond7.png");

  diamond8img = loadImage("diamond8.png");
  
  diamond9img = loadImage("diamond9.png");

  pigimg = loadImage("NPC.png");
  
  eggimg = loadImage("egg.png");


}




function setup() {
  createCanvas(800,600);
  bird = createSprite(228, 30, 50, 50);
  bird.addImage(pc);
  bird.scale = 0.019;

  

  wall1= createSprite(100,50,200,10);
  wall1.shapeColor = "purple";
 
  wall2= createSprite(5,280,10,450);
  wall2.shapeColor = "purple";

  wall3= createSprite(150,120,10,150);
  wall3.shapeColor = "purple";

  wall4= createSprite(30,100,50,10);
  wall4.shapeColor = "purple";

  wall5= createSprite(120,130,50,10);
  wall5.shapeColor = "purple";

  wall6= createSprite(100,110,10,40);
  wall6.shapeColor = "purple";

  wall7= createSprite(50,190,110,10);
  wall7.shapeColor = "purple";

  wall8= createSprite(200,190,110,10);
  wall8.shapeColor = "purple";

  wall9= createSprite(200,220,10,60);
  wall9.shapeColor = "purple";

  wall10= createSprite(260,165,10,60);
  wall10.shapeColor = "purple";

  wall11= createSprite(405,50,300,10);
  wall11.shapeColor = "purple";

  wall12= createSprite(260,75,10,40);
  wall12.shapeColor = "purple";

  wall13= createSprite(240,90,50,10);
  wall13.shapeColor = "purple";

  wall14= createSprite(210,115,10,60);
  wall14.shapeColor = "purple";

  wall15= createSprite(290,140,50,10);
  wall15.shapeColor = "purple";

  wall16= createSprite(260,15,10,60);
  wall16.shapeColor = "purple";

  wall17= createSprite(195,15,10,60);
  wall17.shapeColor = "purple";

  wall18= createSprite(210,115,10,60);
  wall18.shapeColor = "purple";

  wall19= createSprite(230,3,65,10);
  wall19.shapeColor = "purple";

  wall20= createSprite(550,280,10,450);
  wall20.shapeColor = "purple";

  wall21= createSprite(310,115,10,45);
  wall21.shapeColor = "purple";

  wall22= createSprite(355,95,100,10);
  wall22.shapeColor = "purple";

  wall23= createSprite(400,165,10,150);
  wall23.shapeColor = "purple";

  wall24= createSprite(400,235,100,10);
  wall24.shapeColor = "purple";

  wall25= createSprite(425,280,250,10);
  wall25.shapeColor = "purple";

  wall26= createSprite(305,235,10,100);
  wall26.shapeColor = "purple";

  wall27= createSprite(325,185,50,10);
  wall27.shapeColor = "purple";

  wall28= createSprite(355,165,10,50);
  wall28.shapeColor = "purple";

  wall29= createSprite(475,105,10,100);
  wall29.shapeColor = "purple";

  wall30= createSprite(515,190,80,10);
  wall30.shapeColor = "purple";

  wall31= createSprite(355,325,310,10);
  wall31.shapeColor = "purple";

  wall32= createSprite(255,280,10,100);
  wall32.shapeColor = "purple";

  wall33= createSprite(205,355,10,50);
  wall33.shapeColor = "purple";

  wall34= createSprite(235,375,70,10);
  wall34.shapeColor = "purple";

  wall35= createSprite(375,355,10,50);
  wall35.shapeColor = "purple";

  wall36= createSprite(425,385,10,130);
  wall36.shapeColor = "purple";

  wall37= createSprite(445,455,50,10);
  wall37.shapeColor = "purple";

  wall38= createSprite(525,415,50,10);
  wall38.shapeColor = "purple";

  wall39= createSprite(525,375,50,10);
  wall39.shapeColor = "purple";

  wall40= createSprite(435,505,240,10);
  wall40.shapeColor = "purple";

  wall41= createSprite(315,485,10,50);
  wall41.shapeColor = "purple";

  wall42= createSprite(295,465,130,10);
  wall42.shapeColor = "purple";

  wall43= createSprite(295,420,270,10);
  wall43.shapeColor = "purple";

  wall44= createSprite(325,395,10,40);
  wall44.shapeColor = "purple";

  wall45= createSprite(5,510,480,10);
  wall45.shapeColor = "purple";

  wall46= createSprite(155,380,10,260);
  wall46.shapeColor = "purple";

  wall47= createSprite(185,285,60,10);
  wall47.shapeColor = "purple";

  wall48= createSprite(125,255,50,10);
  wall48.shapeColor = "purple";

  wall49= createSprite(55,275,10,50);
  wall49.shapeColor = "purple";

  wall50= createSprite(85,295,50,10);
  wall50.shapeColor = "purple";

  wall51= createSprite(105,380,10,180);
  wall51.shapeColor = "purple";

  wall52= createSprite(45,465,120,10);
  wall52.shapeColor = "purple";

  wall53= createSprite(5,340,100,10);
  wall53.shapeColor = "purple";

  wall54= createSprite(55,378,10,85);
  wall54.shapeColor = "purple";

  diamond= createSprite(20,20);
  diamond.addImage(diamondimg);
  diamond.scale = 0.15;

  goldcoin = createSprite(110,20);
  goldcoin.addImage(goldcoinimg);
  goldcoin.scale = 0.02;

  goldcoin1 = createSprite(515,70);
  goldcoin1.addImage(goldcoinimg);
  goldcoin1.scale = 0.02;

  goldcoin2 = createSprite(35,75);
  goldcoin2.addImage(goldcoinimg);
  goldcoin2.scale = 0.02;

  goldcoin3 = createSprite(235,350);
  goldcoin3.addImage(goldcoinimg);
  goldcoin3.scale = 0.02;

  goldcoin4 = createSprite(80,320);
  goldcoin4.addImage(goldcoinimg);
  goldcoin4.scale = 0.02;

  goldcoin5 = createSprite(75,160);
  goldcoin5.addImage(goldcoinimg);
  goldcoin5.scale = 0.02;

  goldcoin6 = createSprite(528,480);
  goldcoin6.addImage(goldcoinimg);
  goldcoin6.scale = 0.02;

  goldcoin7 = createSprite(178.5,212);
  goldcoin7.addImage(goldcoinimg);
  goldcoin7.scale = 0.02;

  goldcoin8 = createSprite(446,348);
  goldcoin8.addImage(goldcoinimg);
  goldcoin8.scale = 0.02;

  goldcoin9 = createSprite(330,255);
  goldcoin9.addImage(goldcoinimg);
  goldcoin9.scale = 0.02;

  diamond1 = createSprite(30,360);
  diamond1.addImage(diamond1img);
  diamond1.scale = 0.15;

  diamond2 = createSprite(530,395);
  diamond2.addImage(diamond2img);
  diamond2.scale = 0.15;

  diamond3 = createSprite(400,350);
  diamond3.addImage(diamond3img);
  diamond3.scale = 0.15;

  diamond4 = createSprite(125,110);
  diamond4.addImage(diamond4img);
  diamond4.scale = 0.15;

  diamond5 = createSprite(30,160);
  diamond5.addImage(diamond5img);
  diamond5.scale = 0.15;

  diamond6 = createSprite(30,487.5);
  diamond6.addImage(diamond6img);
  diamond6.scale = 0.15;

  diamond7 = createSprite(182,487.5);
  diamond7.addImage(diamond7img);
  diamond7.scale = 0.11;

  diamond8 = createSprite(130,320);
  diamond8.addImage(diamond8img);
  diamond8.scale = 0.11;

  diamond9 = createSprite(355,123);
  diamond9.addImage(diamond9img);
  diamond9.scale = 0.11;

  pig1 = createSprite(535,70);
  pig1.addImage(pigimg);
  pig1.scale = 0.15;
  pig1.velocityY = 5;

  pig2 = createSprite(30,100);
  pig2.addImage(pigimg);
  pig2.scale = 0.15;
  pig2.velocityY = 1;

  pig3 = createSprite(450,450);
  pig3.addImage(pigimg);
  pig3.scale = 0.15;
  pig3.velocityY = 3;

  egg = createSprite(280,540);
  egg.addImage(eggimg);
  egg.scale = 0.15;

  

  

}

function draw() {
  background(back); 
  
  if(keyDown(LEFT_ARROW)){
    bird.x -=2
  }
  if(keyDown(RIGHT_ARROW)){
    bird.x +=2
  }
  if(keyDown(DOWN_ARROW)){
    bird.y +=2
  }
  if(keyDown(UP_ARROW)){
    bird.y -=2
  }

  if(bird.isTouching(wall1) || bird.isTouching(wall2) || bird.isTouching(wall3)  || bird.isTouching(wall4)  || bird.isTouching(wall5) 
  ||bird.isTouching(wall6)  ||  bird.isTouching(wall7) || bird.isTouching(wall8) || bird.isTouching(wall9)  || bird.isTouching(wall10)
  || bird.isTouching(wall11) || bird.isTouching(wall12) || bird.isTouching(wall13) || bird.isTouching(wall14) || bird.isTouching(wall15)
  || bird.isTouching(wall16) || bird.isTouching(wall17) || bird.isTouching(wall18) || bird.isTouching(wall19) || bird.isTouching(wall20)
  || bird.isTouching(wall21) || bird.isTouching(wall22) || bird.isTouching(wall23) || bird.isTouching(wall24) || bird.isTouching(wall25)
  || bird.isTouching(wall26) || bird.isTouching(wall27) || bird.isTouching(wall28) || bird.isTouching(wall29) || bird.isTouching(wall30)
  || bird.isTouching(wall31) || bird.isTouching(wall32) || bird.isTouching(wall33) || bird.isTouching(wall34) || bird.isTouching(wall35)
  || bird.isTouching(wall36) || bird.isTouching(wall37) || bird.isTouching(wall38) || bird.isTouching(wall39) || bird.isTouching(wall40)
  || bird.isTouching(wall41) || bird.isTouching(wall42) || bird.isTouching(wall43) || bird.isTouching(wall44) || bird.isTouching(wall45)
  || bird.isTouching(wall46) || bird.isTouching(wall47) || bird.isTouching(wall48) || bird.isTouching(wall49) || bird.isTouching(wall50)
  || bird.isTouching(wall51) || bird.isTouching(wall52) || bird.isTouching(wall53) || bird.isTouching(wall54) ){
    gameState = END }

  if(bird.isTouching(goldcoin1)){
    scoreg = scoreg+1;
    goldcoin1.destroy();
    
  }
  if(bird.isTouching(goldcoin2)){
    scoreg = scoreg+1;
    goldcoin2.destroy();
    
  }
  if(bird.isTouching(goldcoin3)){
    scoreg = scoreg+1;
    goldcoin3.destroy();
    
  }

  if(bird.isTouching(goldcoin4)){
    scoreg = scoreg+1;
    goldcoin4.destroy();
    
  }

  if(bird.isTouching(goldcoin5)){
    scoreg = scoreg+1;
    goldcoin5.destroy();
    
  }

  if(bird.isTouching(goldcoin6)){
    scoreg = scoreg+1;
    goldcoin6.destroy();
    
  }

  if(bird.isTouching(goldcoin7)){
    scoreg = scoreg+1;
    goldcoin7.destroy();
    
  }

  if(bird.isTouching(goldcoin8)){
    scoreg = scoreg+1;
    goldcoin8.destroy();
    
  }

  if(bird.isTouching(goldcoin9)){
    scoreg = scoreg+1;
    goldcoin9.destroy();
    
  }

  if(bird.isTouching(diamond1)){
    scored = scored+1;
    diamond1.destroy();
    
  }
  if(bird.isTouching(diamond2)){
    scored = scored+1;
    diamond2.destroy();
    
  }
  if(bird.isTouching(diamond3)){
    scored = scored+1;
    diamond3.destroy();
    
  }
  if(bird.isTouching(diamond4)){
    scored = scored+1;
    diamond4.destroy();
    
  }
  if(bird.isTouching(diamond5)){
    scored = scored+1;
    diamond5.destroy();
    
  }
  if(bird.isTouching(diamond6)){
    scored = scored+1;
    diamond6.destroy();
    
  }
  if(bird.isTouching(diamond7)){
    scored = scored+1;
    diamond7.destroy();
    
  }
  if(bird.isTouching(diamond8)){
    scored = scored+1;
    diamond8.destroy();
    
  }
  if(bird.isTouching(diamond9)){
    scored = scored+1;
    diamond9.destroy();
    
  }
  if(bird.isTouching(pig1)){
    gameState = END;
  }

  if(bird.isTouching(pig2)){
    gameState = END;
  }

  if(bird.isTouching(pig3)){
    gameState = END;
  }

  if(bird.isTouching(egg) && scored === 9 && scoreg === 9){
    gameState = WIN;
  }


  if(gameState === END){
    
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    wall15.destroy();
    wall16.destroy();
    wall17.destroy();
    wall18.destroy();
    wall19.destroy();
    bird.destroy();
    wall20.destroy();
    wall21.destroy();
    wall22.destroy();
    wall23.destroy();
    wall24.destroy();
    wall25.destroy();
    wall26.destroy();
    wall27.destroy();
    wall28.destroy();
    wall29.destroy();
    wall30.destroy();
    wall31.destroy();
    wall32.destroy();
    wall33.destroy();
    wall34.destroy();
    wall35.destroy();
    wall36.destroy();
    wall37.destroy();
    wall38.destroy();
    wall39.destroy();
    wall40.destroy();
    wall41.destroy();
    wall42.destroy();
    wall43.destroy();
    wall44.destroy();
    wall45.destroy();
    wall46.destroy();
    wall47.destroy();
    wall48.destroy();
    wall49.destroy();
    wall50.destroy();
    wall51.destroy();
    wall52.destroy();
    wall53.destroy();
    wall54.destroy();
    goldcoin1.destroy();
    goldcoin2.destroy();
    goldcoin3.destroy();
    goldcoin4.destroy();
    goldcoin5.destroy();
    goldcoin6.destroy();
    goldcoin7.destroy();
    goldcoin8.destroy();
    goldcoin9.destroy();

    diamond1.destroy();
    diamond2.destroy();
    diamond3.destroy();
    diamond4.destroy();
    diamond5.destroy();
    diamond6.destroy();
    diamond7.destroy();
    diamond8.destroy();
    diamond9.destroy();
    pig1.destroy();
    pig2.destroy();
    pig3.destroy();

    egg.destroy();


   
    
    fill("gold")
    textSize(50);
    text("You Lose",200,300);
  
  
  
  }
  if(gameState === WIN){
    
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    wall15.destroy();
    wall16.destroy();
    wall17.destroy();
    wall18.destroy();
    wall19.destroy();
    bird.destroy();
    wall20.destroy();
    wall21.destroy();
    wall22.destroy();
    wall23.destroy();
    wall24.destroy();
    wall25.destroy();
    wall26.destroy();
    wall27.destroy();
    wall28.destroy();
    wall29.destroy();
    wall30.destroy();
    wall31.destroy();
    wall32.destroy();
    wall33.destroy();
    wall34.destroy();
    wall35.destroy();
    wall36.destroy();
    wall37.destroy();
    wall38.destroy();
    wall39.destroy();
    wall40.destroy();
    wall41.destroy();
    wall42.destroy();
    wall43.destroy();
    wall44.destroy();
    wall45.destroy();
    wall46.destroy();
    wall47.destroy();
    wall48.destroy();
    wall49.destroy();
    wall50.destroy();
    wall51.destroy();
    wall52.destroy();
    wall53.destroy();
    wall54.destroy();
    goldcoin1.destroy();
    goldcoin2.destroy();
    goldcoin3.destroy();
    goldcoin4.destroy();
    goldcoin5.destroy();
    goldcoin6.destroy();
    goldcoin7.destroy();
    goldcoin8.destroy();
    goldcoin9.destroy();

    diamond1.destroy();
    diamond2.destroy();
    diamond3.destroy();
    diamond4.destroy();
    diamond5.destroy();
    diamond6.destroy();
    diamond7.destroy();
    diamond8.destroy();
    diamond9.destroy();
    pig1.destroy();
    pig2.destroy();
    pig3.destroy();

    egg.destroy();


   
    
    fill("gold")
    textSize(50);
    text("You Win",200,300);
  
  
  
  }

 
  bird.bounceOff(wall1);
  bird.bounceOff(wall2);
  bird.bounceOff(wall3);
  bird.bounceOff(wall4);
  bird.bounceOff(wall5);
  bird.bounceOff(wall6);
  bird.bounceOff(wall7);
  bird.bounceOff(wall8);
  bird.bounceOff(wall9);
  bird.bounceOff(wall10);
  bird.bounceOff(wall11);
  bird.bounceOff(wall12);
  bird.bounceOff(wall13);
  bird.bounceOff(wall14);
  bird.bounceOff(wall15);
  bird.bounceOff(wall16);
  bird.bounceOff(wall17);
  bird.bounceOff(wall18);
  bird.bounceOff(wall19);
  bird.bounceOff(wall20);
  bird.bounceOff(wall21);
  bird.bounceOff(wall22);
  bird.bounceOff(wall23);
  bird.bounceOff(wall24);
  bird.bounceOff(wall25);
  bird.bounceOff(wall26);
  bird.bounceOff(wall27);
  bird.bounceOff(wall28);
  bird.bounceOff(wall29);
  bird.bounceOff(wall30);
  bird.bounceOff(wall31);
  bird.bounceOff(wall32);
  bird.bounceOff(wall33);
  bird.bounceOff(wall34);
  bird.bounceOff(wall35);
  bird.bounceOff(wall36);
  bird.bounceOff(wall37);
  bird.bounceOff(wall38);
  bird.bounceOff(wall39);
  bird.bounceOff(wall40);
  bird.bounceOff(wall41);
  bird.bounceOff(wall42);
  bird.bounceOff(wall43);
  bird.bounceOff(wall44);
  bird.bounceOff(wall45);
  bird.bounceOff(wall46);
  bird.bounceOff(wall47);
  bird.bounceOff(wall48);
  bird.bounceOff(wall49);
  bird.bounceOff(wall50);
  bird.bounceOff(wall51);
  bird.bounceOff(wall52);
  bird.bounceOff(wall53);
  bird.bounceOff(wall54);
  bird.bounceOff(egg);

  pig1.bounceOff(wall1);
  pig1.bounceOff(wall2);
  pig1.bounceOff(wall3);
  pig1.bounceOff(wall4);
  pig1.bounceOff(wall5);
  pig1.bounceOff(wall6);
  pig1.bounceOff(wall7);
  pig1.bounceOff(wall8);
  pig1.bounceOff(wall9);
  pig1.bounceOff(wall10);
  pig1.bounceOff(wall11);
  pig1.bounceOff(wall12);
  pig1.bounceOff(wall13);
  pig1.bounceOff(wall14);
  pig1.bounceOff(wall15);
  pig1.bounceOff(wall16);
  pig1.bounceOff(wall17);
  pig1.bounceOff(wall18);
  pig1.bounceOff(wall19);
  pig1.bounceOff(wall20);
  pig1.bounceOff(wall21);
  pig1.bounceOff(wall22);
  pig1.bounceOff(wall23);
  pig1.bounceOff(wall24);
  pig1.bounceOff(wall25);
  pig1.bounceOff(wall26);
  pig1.bounceOff(wall27);
  pig1.bounceOff(wall28);
  pig1.bounceOff(wall29);
  pig1.bounceOff(wall30);
  pig1.bounceOff(wall31);
  pig1.bounceOff(wall32);
  pig1.bounceOff(wall33);
  pig1.bounceOff(wall34);
  pig1.bounceOff(wall35);
  pig1.bounceOff(wall36);
  pig1.bounceOff(wall37);
  pig1.bounceOff(wall38);
  pig1.bounceOff(wall39);
  pig1.bounceOff(wall40);
  pig1.bounceOff(wall41);
  pig1.bounceOff(wall42);
  pig1.bounceOff(wall43);
  pig1.bounceOff(wall44);
  pig1.bounceOff(wall45);
  pig1.bounceOff(wall46);
  pig1.bounceOff(wall47);
  pig1.bounceOff(wall48);
  pig1.bounceOff(wall49);
  pig1.bounceOff(wall50);
  pig1.bounceOff(wall51);
  pig1.bounceOff(wall52);
  pig1.bounceOff(wall53);
  pig1.bounceOff(wall54);
  pig1.bounceOff(goldcoin1);

  pig2.bounceOff(wall1);

  pig2.bounceOff(wall2);

  pig2.bounceOff(wall3);

  pig2.bounceOff(wall4);

  pig2.bounceOff(wall5);

  pig2.bounceOff(wall6);

  pig2.bounceOff(wall7);

  pig2.bounceOff(wall8);

  pig2.bounceOff(wall9);

  pig2.bounceOff(wall10);

  pig2.bounceOff(wall11);

  pig2.bounceOff(wall12);

  pig2.bounceOff(wall13);

  pig2.bounceOff(wall14);

  pig2.bounceOff(wall15);

  pig2.bounceOff(wall16);

  pig2.bounceOff(wall17);

  pig2.bounceOff(wall18);

  pig2.bounceOff(wall19);

  pig2.bounceOff(wall20);

  pig2.bounceOff(wall21);

  pig2.bounceOff(wall22);

  pig2.bounceOff(wall23);

  pig2.bounceOff(wall24);

  pig2.bounceOff(wall25);

  pig2.bounceOff(wall26);

  pig2.bounceOff(wall27);

  pig2.bounceOff(wall28);

  pig2.bounceOff(wall29);

  pig2.bounceOff(wall30);

  pig2.bounceOff(wall31);

  pig2.bounceOff(wall32);

  pig2.bounceOff(wall33);

  pig2.bounceOff(wall34);

  pig2.bounceOff(wall35);

  pig2.bounceOff(wall36);

  pig2.bounceOff(wall37);

  pig2.bounceOff(wall38);

  pig2.bounceOff(wall39);

  pig2.bounceOff(wall40);

  pig2.bounceOff(wall41);

  pig2.bounceOff(wall42);

  pig2.bounceOff(wall43);

  pig2.bounceOff(wall44);

  pig2.bounceOff(wall45);

  pig2.bounceOff(wall46);

  pig2.bounceOff(wall47);

  pig2.bounceOff(wall48);

  pig2.bounceOff(wall49);

  pig2.bounceOff(wall50);

  pig2.bounceOff(wall51);

  pig2.bounceOff(wall52);

  pig2.bounceOff(wall53);

  pig2.bounceOff(wall54);

  pig2.bounceOff(diamond5);



  pig3.bounceOff(wall1);

  pig3.bounceOff(wall2);

  pig3.bounceOff(wall3);

  pig3.bounceOff(wall4);

  pig3.bounceOff(wall5);

  pig3.bounceOff(wall6);

  pig3.bounceOff(wall7);

  pig3.bounceOff(wall8);

  pig3.bounceOff(wall9);

  pig3.bounceOff(wall10);

  pig3.bounceOff(wall11);

  pig3.bounceOff(wall12);

  pig3.bounceOff(wall13);

  pig3.bounceOff(wall14);

  pig3.bounceOff(wall15);

  pig3.bounceOff(wall16);

  pig3.bounceOff(wall17);

  pig3.bounceOff(wall18);

  pig3.bounceOff(wall19);

  pig3.bounceOff(wall20);

  pig3.bounceOff(wall21);

  pig3.bounceOff(wall22);

  pig3.bounceOff(wall23);

  pig3.bounceOff(wall24);

  pig3.bounceOff(wall25);

  pig3.bounceOff(wall26);

  pig3.bounceOff(wall27);

  pig3.bounceOff(wall28);

  pig3.bounceOff(wall29);

  pig3.bounceOff(wall30);

  pig3.bounceOff(wall31);

  pig3.bounceOff(wall32);

  pig3.bounceOff(wall33);

  pig3.bounceOff(wall34);

  pig3.bounceOff(wall35);

  pig3.bounceOff(wall36);

  pig3.bounceOff(wall37);

  pig3.bounceOff(wall38);

  pig3.bounceOff(wall39);

  pig3.bounceOff(wall40);

  pig3.bounceOff(wall41);

  pig3.bounceOff(wall42);

  pig3.bounceOff(wall43);

  pig3.bounceOff(wall44);

  pig3.bounceOff(wall45);

  pig3.bounceOff(wall46);

  pig3.bounceOff(wall47);

  pig3.bounceOff(wall48);

  pig3.bounceOff(wall49);

  pig3.bounceOff(wall50);

  pig3.bounceOff(wall51);

  pig3.bounceOff(wall52);

  pig3.bounceOff(wall53);

  pig3.bounceOff(wall54);

  pig3.bounceOff(goldcoin8);

  edges = createEdgeSprites();
  bird.bounceOff(edges);
 
  textSize(30);
  fill("purple");
  text("Mystery Twist",315,30);
  textSize(15);
  fill("gold")
  text("Instructions : ",560,40);
  text("Try figuring out how you can reach ",560,70);
  text("the end of the maze.",560,90);
  text("Your goal is nothing but to revenge ",560,120);
  text("the pigs for eating your eggs.",560,140);
  text("You can control the Angry bird(You)",560,170);
  text("by pressing the arrow keys.",560,190);
  text("The score is displayed on the",560,220);
  text("top left corner which includes how",560,240);
  text(" many diamonds and gold coins ",555,260);
  text("you have collected.",560,280);
  text("If you collect all the diamonds,",560,310);
  text("gold coins and the eggs you win.",560,330);
  text("Be aware of the Pigs and if you ",560,360);
  text("touch them, you lose.",560,380);
  text("Do not touch the maze walls,",560,410);
  text("and if you do, you lose",560,430);
  text("All the best.",560,460);
  text("Show your anger to the pigs,",560,490);
  text("as this is right time to do it.",560,510);
  text("Happy Diwali 🪔🪔🪔🪔🪔🪔🪔",560,540);
  
  drawSprites();
  textSize(30);
  text(scored,40,32);
  text(scoreg,132,31);
  
}
