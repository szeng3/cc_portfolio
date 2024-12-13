let backgroundColor;

function setup() {
  createCanvas(600, 600);
  noStroke();
  backgroundColor = color(255, 241, 199);
}

function draw() {
  background(backgroundColor);

  // Face
  let faceSizeX = map(mouseX, 0, width, 200, 120);
  let faceSizeY = map(mouseY, 0, height, 200, 200);
  let faceSize = (faceSizeX + faceSizeY) / 2;

  // Face color
  let color1 = color(184, 213, 255);
  let color2 = color(142, 112, 252);
  let lerpedColor = lerpColor(color1, color2, mouseX / width);

  fill(lerpedColor);
  ellipse(200, 200, faceSizeX, faceSizeY);

  // Left blush
  let blushSizeX = map(mouseX, 0, width, 40, 70);
  let blushSizeY = map(mouseY, 0, height, 40, 40);

  fill(255, 187, 203);
  ellipse(160, 225, blushSizeX, blushSizeY);

  // Right blush
  ellipse(240, 225, blushSizeX, blushSizeY);

  // Left eyes
  let eyesSizeX = map(mouseX, 0, width, 10, 50);
  let eyesSizeY = map(mouseY, 0, height, 10, 70);

  fill(0);
  ellipse(160, 180, eyesSizeX, eyesSizeY);

  // Right eyes
  ellipse(240, 180, eyesSizeX, eyesSizeY);

  // Mouth
  let mouthSizeX = map(mouseX, 0, width, 10, 70);
  let mouthSizeY = map(mouseY, 0, height, 10, 10);

  fill(0);
  ellipse(200, 260, mouthSizeX, mouthSizeY);
}

function mousePressed() {
  backgroundColor = color(random(255), random(255), random(255));
}
