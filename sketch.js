let x = 0;
let speed = 5

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  circle(x, 200, 150);

  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;
}

// Practicing java script and p5.js
// This is a simple sketch that draws a circle that moves back and forth across the canvas.
// The circle bounces off the edges of the canvas.
// The speed of the circle is controlled by the variable 'speed'.



