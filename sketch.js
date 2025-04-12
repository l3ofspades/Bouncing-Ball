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

  
  if (x > width) {
    speed = -5;
  }
  x = x + speed;
}



