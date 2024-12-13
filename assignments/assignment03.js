// Moving noise particles
let particles = [];
const num = 500;
const noiseScale = 0.001;

let lastSecond = -1; // To track the last second
let lastMinuteChange = 0;
let strokeColor;
let alphaValue = 155;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  
  // Initialize particle positions
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }

//stroke color
strokeColor = color(random(255), random(255),random(255));
  
//text
  textAlign(CENTER,CENTER);
  textSize(200);
}


function draw() {
  background(0, 10);

  stroke(strokeColor);
  
  let hr = hour();
  let min = minute();
  let sec = second();

  //minute
  push();//create layering effect for the text
  blendMode(DIFFERENCE)
  fill(strokeColor, alphaValue);
  text(min, width/2,height/2);
  pop();

  if(alphaValue > 0){
    alphaValue -= 2;
  }
  
  // Change direction every second
  if (sec !== lastSecond) {
    noiseSeed(millis());
    lastSecond = sec; // Update lastSecond to the current second
  }

  //change the stroke color every 60s
  if(min !== lastMinuteChange){
    strokeColor = color(random(255),random(255),random(255));
    lastMinuteChange = min;
  }
  
  //PARTICLE
  for (let i = 0; i < num; i++) {
    let p = particles[i];

    // Calculate noise-based movement
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let angle = TAU * n; // Angle from noise
    p.x += sin(angle); // Update x position
    p.y += cos(angle); // Update y position

    // Wrap particles around the screen
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }

    point(p.x, p.y);
  }
  
  //HOUR RECTANGLE
  push();
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(strokeColor);
  
  //rectangle frame
  noFill();
  strokeWeight(10);
  
 
      circle(width/2,0,5)
    
  
  //beginShape();
  //vertex(width/2*sec, 0);//1st pt
  //vertex(width*sec, 0);//2nd pt
  //vertex(width*sec, height);//3rd pt
  //vertex(0, height);//4th pt
  //vertex(0, 0);//5th pt
  //vertex(width/2, 0);//6h pt
  endShape(CLOSE);
  pop();
  
}

// vector on the screen
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}