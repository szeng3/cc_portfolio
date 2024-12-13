function setup() {
    createCanvas(600, 600);
    
  noStroke();
  angleMode();
    
  }
  
  function draw() {
    background(214, 173, 237);
   
    body();
    collar();
    head();
    rleg();
    
    let rlegCenterX = 235;
    let rlegCenterY = 530;
    let rlegAngle = atan2(mouseY - rlegCenterY, mouseX - rlegCenterX);
    let x=280;
    let y=480;
    
    //left leg
   push();
    translate(rlegCenterX-400,rlegCenterY);
    rotate(rlegAngle);
    rleg();
    pop();
    
     //skirt
    beginShape();
    fill(11,16,10);
    vertex(230,450);
    vertex(380,450);
    vertex(410,500);
    vertex(210,500);
    endShape(CLOSE);
    
    
    function body(){
    //body
    beginShape();
    fill(237,205,154);
    vertex(290,250);
    bezierVertex(290,290,230,280,230,310);
    vertex(230,300);
    line(230,300,300,300)
    vertex(380,300);
    bezierVertex(320,270,320,280,320,270);
    endShape();
  
    //orange clothes
    fill(193,87,35);
    rect(255,282,90,80);
    fill(237,205,154); 
    arc(300,282,90,60,0,PI);
          
    //jacket
    fill(21,73,51);
    beginShape();
    vertex(230,290);
     vertex(260,275);
     vertex(300,330);
     vertex(300,450);
     vertex(230,450);
    endShape(CLOSE);
    
      //jacket right
    beginShape();
    vertex(380,290);
     vertex(350,275);
     vertex(300,330);
     vertex(300,450);
     vertex(380,450);
    endShape(CLOSE);
    }
    
    
    function head(){
   //left ear
    push();
    fill(163,81,42);
    translate(width/2,height/2)
    rotate(180);
    arc(107,165,90,95,0, PI)
    pop();
    
    //right ear
    push();
    fill(163,81,42);
    translate(width/2,height/2)
    scale(-1, 1)
    rotate(180);
    arc(107,165,90,95,0, PI)
    pop();
    
    //bear head
  beginShape();
    
    fill(165,90,49)
    vertex(200,160)
   bezierVertex(220, 40, 380, 40, 400,160);
    vertex(400,160)
   bezierVertex(415,215,395,275,300,270);
     vertex(300,270)
   bezierVertex(200,275,190,215,200,160);
    
    endShape();
      
    //bear left eyes
    fill(0)
    circle(280,170,20);
    fill(140)
     circle(285,170,5);
    
      //bear right eyes
    fill(0)
    circle(320,170,20);
     fill(140)
     circle(325,170,5);
    
    //bear mouth
    fill(244,237,227);
    ellipse(305,220,100,60);
    
    //mouth line
    push();
    stroke(123,75,53)
    line(305,210,305,240)
    
    
    noFill();
    arc(305,230,50,20,0,PI)
    pop();
    
    //nose
    fill(123,75,53);
    ellipse(305,215,40,30);
    
  }
    
    
  
    function collar () {  
      //collar left
      beginShape(triangle);
      
      fill(5,31,18);
      //up
      vertex(270,255);
       vertex(210,290);
       vertex(315,350);
      
      //down
      vertex(280,295);
       vertex(240,340);
       vertex(315,390);
       
      endShape(CLOSE);
      
   }
    
    //collar mirror
        push();
    translate(width,0);
    scale(-1,1);
    collar();
    pop();
    
    function rleg(x,y){
      
      beginShape(); // x 280 y 480
      fill(255);
      stroke(0);
      vertex(x,y);
      vertex(x-80,y+50);
      vertex(x-45,y+100);
      vertex(x-10,y+100);
      vertex(x-45,y+55);
      vertex(x+20,y+20);
      endShape(CLOSE);
      
      arc(300,500,70,50,0,PI-PI/8);
      
      //rsock
      beginShape();
      fill(255);
      stroke(0);
      vertex(215,560);
      vertex(260,560);
      vertex(275,580);
      vertex(180,580);
      bezierVertex(180,580,180,570,225,570);
      vertex(225,570);
      
      endShape(CLOSE);
      
      //rslipper
      fill(0);
      ellipse(190,575,3,15)
      rect(180,580,100,10);
      
    }
  
    
  }