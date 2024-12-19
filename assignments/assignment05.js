let img;
let numCircle,circleR;

function preload(){
  
img = loadImage("../image/optical bg.jpg");
}

function setup() {
  createCanvas(600, 600);

  circleR = 20;
  numCircle = height/circleR;

  imageMode(CENTER); 
}


function draw() {
  background(220);
  noStroke();
   image(img,width/2-20,height/2);
  
  for(let x=0; x<=numCircle; x++){
    for(let y=0; y<=numCircle; y++){
      
      //even column
      if(x % 2==0){
        //even row
        if(y % 2==0){
          drawCircle(255,x,y)
        }else{
        drawCircle(0,x,y)
      } 
      }
      else{
        if(y % 2 ==0){
          drawCircle(200,x,y)
        }else{
          drawCircle(255,x,y)
        }
      }
    }
  }
  
}

function drawCircle(color,i,j){
  if (color==255){
  push();
  blendMode(DIFFERENCE);
  fill(color);
  circle(i*circleR, j*circleR,circleR);
  fill(0)
  circle(mouseX,mouseY,circleR+20)
  pop();
}   
  else {

  fill(color);
  circle(i*circleR, j*circleR,circleR-10);
  fill(255)

}

}

