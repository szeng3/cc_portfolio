let stepNum = [76, 66, 47, 133];
let circleColor = 0;
let balls = [];
let dropInterval = 1000; // 1 second interval for each batch
let ballDiameter = 30;

function setup() {
  createCanvas(600, 600);
  noStroke(); 
}

function draw() {
  background(255,240,237);

  // Update and draw each ball
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    
    // Set the color based on the ball's color index
    switch (ball.color) {
      case 0:
        fill(37, 150, 190); // C1
        break;
      case 1:
        fill(236, 170, 135); // C2
        break;
      case 2:
        fill(11, 62, 107); // C3
        break;
      case 3:
        fill(139, 128, 132); // C4
        break;
      default:
        fill(51,98,126); // Default 
    }
    
    // Draw the ball
    circle(ball.x, ball.y, ballDiameter);
    
    // Move the ball down if it's not at the bottom or on top of another ball
    if (ball.y < height - ballDiameter / 2) {
      let canMoveDown = true;
      let canMoveLeft = true;
      let canMoveRight = true;

      for (let j = 0; j < balls.length; j++) {
        if (i !== j) {
          let otherBall = balls[j];
          let distance = dist(ball.x, ball.y, otherBall.x, otherBall.y);

          // Check if the ball can move down
          if (distance < ballDiameter && ball.y < otherBall.y) {
            canMoveDown = false;
          }

          // Check if the ball can move left
          if (dist(ball.x - ballDiameter / 2, ball.y, otherBall.x, otherBall.y) < ballDiameter) {
            canMoveLeft = false;
          }

          // Check if the ball can move right
          if (dist(ball.x + ballDiameter / 2, ball.y, otherBall.x, otherBall.y) < ballDiameter) {
            canMoveRight = false;
          }
        }
      }

      // Move the ball
      if (canMoveDown) {
        ball.y += 6; // Increase downward speed
      } else if (canMoveLeft) {
        ball.x -= 3; // Increase rolling speed
      } else if (canMoveRight) {
        ball.x += 3; // Increase rolling speed
      }
    }
  }
}

function mousePressed() {
  // Drop a new batch of balls
  if (circleColor < stepNum.length) {
    let circleNum = stepNum[circleColor];
    let spacing = width / circleNum; // Calculate spacing based on the number of balls

    for (let i = 0; i < circleNum; i++) {
      setTimeout(() => {
        balls.push({
          x: i * spacing + random(-spacing / 4, spacing / 4), // More randomness in initial x position
          y: 0,
          color: circleColor
        });
      }, random(0, dropInterval)); // Randomize the drop time within the interval
    }
    
    // Move to the next color/step
    circleColor++;
  }
}
  
  