let i;
let r;
let n;
let cornerPoints = []
let prevCorner;
let currentPos;

function setup() {
  createCanvas(800, 800);
  frameRate(120);
  background(0);
  stroke(255);
  strokeWeight(2);

  i = 0;
  r = width / 2 - 20;
  n = 5;

  for (let i = 0; i < n; i++) {
    cornerPoints.push({x: r * Math.cos(2 * Math.PI * i / n), y: r * Math.sin(2 * Math.PI * i / n)});
  }

  console.log(cornerPoints);
  currentPos = {x: 2 * (width / 3), y: height - height / 4};
}

function draw() {
  if (i === 0) {
    drawCornerPoints();
    drawCurrentPos();
  } else {
    let randomInt = rollTheDice();
    // currentPos.x = calcX(cornerPoints[randomInt]);
    // currentPos.y = calcY(cornerPoints[randomInt]);
    // drawCurrentPos();
  }

  i++;
}

function calcUpperRight() {

}

function calcX(cornerPoint) {
  let diff = cornerPoint.x - currentPos.x;
  return cornerPoint.x - diff / 2;
}

function calcY(cornerPoint) {
  let diff = cornerPoint.y - currentPos.y;
  return cornerPoint.y - diff / 2;
}

function drawCornerPoints() {
  push();
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  rotate(-90);
  point(cornerPoints[0].x, cornerPoints[0].y);
  point(cornerPoints[1].x, cornerPoints[1].y);
  point(cornerPoints[2].x, cornerPoints[2].y);
  point(cornerPoints[3].x, cornerPoints[3].y);
  point(cornerPoints[4].x, cornerPoints[4].y);
  pop();
}

function drawCurrentPos() {
  point(currentPos.x, currentPos.y);
}

function rollTheDice() {
  return Math.floor(Math.random() * 5);
}

// ruby -run -e httpd . -p 8000
