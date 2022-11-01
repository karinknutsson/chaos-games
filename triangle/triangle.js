let i;
let cornerPoints = []
let currentPos;

function setup() {
  createCanvas(900, 800);
  frameRate(120);
  background(0);
  stroke(255);
  strokeWeight(1);

  i = 0;

  cornerPoints = [
    {x: width / 2, y: 10},
    {x: 10, y: height - 10},
    {x: width - 10, y: height - 10}
  ];

  currentPos = {x: 2 * (width / 3), y: height - height / 4};
}

function draw() {
  if (i === 0) {
    drawCornerPoints();
  } else {
    let randomInt = rollTheDice();
    currentPos.x = calcX(cornerPoints[randomInt]);
    currentPos.y = calcY(cornerPoints[randomInt]);
    drawCurrentPos();
  }

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

function drawCornerPoints() {
  point(cornerPoints[0].x, cornerPoints[0].y);
  point(cornerPoints[1].x, cornerPoints[1].y);
  point(cornerPoints[2].x, cornerPoints[2].y);
}

function drawCurrentPos() {
  point(currentPos.x, currentPos.y);
}

function rollTheDice() {
  return Math.floor(Math.random() * 3);
}

// ruby -run -e httpd . -p 8000
