let stepNum = [76, 66,47,133];
let y;
let circleColor = 0;
let balls=[];

function setup() {
  createCanvas(600, 600);
  y = random(height);
  noStroke();
}

function draw() {
  background(220);

  circle(width/2, y,100)
 
  //circle stay at the bottom when it hits
if (y< height-50){
   y += 4;
}else{
  y= height - 50;
  }
    
  //circle change color with the stepNum
  if (circleColor<stepNum.length){
    if(stepNum[circleColor]===76){
      fill(217, 240, 255);
    }else if (stepNum[circleColor]===66){
       fill(174, 221, 250);
    }else if (stepNum[circleColor]===47){
       fill(131, 201, 244);
  }else if (stepNum[circleColor]===133){
       fill(121, 158, 227);
  }
  }
}



function mousePressed(){

  //circle drop same amount as stepNum
let circleNum=stepNum[circleColor];
 balls = [];
for (let i=0; i<circleNum; i++){
}
  

  }

  