let i;
let r;
let n;
let cornerPoints = []
let currentPos;
let previousCorner;

function setup() {
  createCanvas(1000, 1000);
  frameRate(120);
  background(0);
  stroke(255);
  strokeWeight(1);
  angleMode(DEGREES);

  i = 0;
  r = width / 2 - 20;
  n = 5;

  for (let i = 0; i < n; i++) {
    cornerPoints.push({x: r * Math.cos(2 * Math.PI * i / n), y: r * Math.sin(2 * Math.PI * i / n)});
  }

  currentPos = {x: 0, y: 0};
  prevCorner = 0;
}

function draw() {
  let randomInt = previousCorner;

  while (randomInt === previousCorner) {
    randomInt = rollTheDice();
  }

  previousCorner = randomInt;
  currentPos.x = calcX(cornerPoints[randomInt]);
  currentPos.y = calcY(cornerPoints[randomInt]);
  drawCurrentPos();

  i++;
}

function calcX(cornerPoint) {
  let diff = cornerPoint.x - currentPos.x;
  return cornerPoint.x - diff / 2;
}

function calcY(cornerPoint) {
  let diff = cornerPoint.y - currentPos.y;
  return cornerPoint.y - diff / 2;
}

function drawCurrentPos() {
  push();
  translate(width / 2, height / 2);
  rotate(-90);
  point(currentPos.x, currentPos.y);
  pop();
}

function rollTheDice() {
  return Math.floor(Math.random() * 5);
}

// ruby -run -e httpd . -p 8000
