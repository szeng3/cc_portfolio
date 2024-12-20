let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let totalPairs = 8;
let cardImages = [];
let cols = 4;
let rows = 4;
let cardWidth, cardHeight;
let bgimg; // Declare bgimg globally

function preload() {
  // Load the background image
  bgimg = loadImage('image/bg.jpg'); // Replace with the correct path to your background image

  // Load card images
  cardImages = [
    { img: loadImage('image/01.jpg'), id: 0 },
    { img: loadImage('image/02.jpg'), id: 1 },
    { img: loadImage('image/03.jpg'), id: 2 },
    { img: loadImage('image/04.jpg'), id: 3 },
    { img: loadImage('image/05.jpg'), id: 4 },
    { img: loadImage('image/06.jpg'), id: 5 },
    { img: loadImage('image/07.jpg'), id: 6 },
    { img: loadImage('image/08.jpg'), id: 7 },
  ];
}

function setup() {
  createCanvas(800, 800);
  cardWidth = width / cols;
  cardHeight = height / rows;

  let images = cardImages.concat(cardImages); // Create pairs of images
  images = shuffle(images); // Shuffle the images

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let imgObj = images.pop();
      cards.push(new Card(i * cardWidth, j * cardHeight, cardWidth, cardHeight, imgObj.img, imgObj.id));
    }
  }
}

function draw() {
  background(bgimg); // Set the background image

  for (let card of cards) {
    card.show();
  }

  if (matchedPairs === totalPairs) {
    clear();
    image(bgimg, 0, 0, 800, 800);
    fill(255, 255, 255);
    textSize(50);
    textFont('Playwrite Ireland')
    textAlign(CENTER, CENTER);
    text('You Win!', width / 2, height / 2);
    
  }
}

function mousePressed() {
  if (flippedCards.length >= 2) return; // Prevent flipping more than two cards

  for (let card of cards) {
    if (card.contains(mouseX, mouseY) && !card.flipped && !flippedCards.includes(card)) {
      flippedCards.push(card);
      card.flip();
    }
  }

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  if (flippedCards.length < 2) return; // Ensure there are two cards to compare

  if (flippedCards[0].id === flippedCards[1].id) {
    matchedPairs++;
  } else {
    flippedCards[0].flip();
    flippedCards[1].flip();
  }
  flippedCards = [];
}

class Card {
  constructor(x, y, w, h, img, id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.id = id;
    this.flipped = false;
  }

  show() {
    stroke(0);
    fill(255,0,0,0);
    rect(this.x, this.y, this.w, this.h);
    if (this.flipped) {
      image(this.img, this.x + 5, this.y + 5, this.w - 10, this.h - 10);
    }
  }

  contains(px, py) {
    return px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h;
  }

  flip() {
    this.flipped = !this.flipped;
  }
}
