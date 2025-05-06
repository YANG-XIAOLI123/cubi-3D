let cubi = [];
let copie = 50;
function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-1000, 1000),
      y: random(-1000, 1000),
      z: random(-1000, 1000),
      size: random(50, 300),
      color: random(["DeepPink", "	MediumOrchid", "MediumSlateBlue"]),
      rotationFunction: random([rotateX, rotateY, rotateZ]),
    };

    cubi.push(cubo);
  }
}

function draw() {
  background("black");
  orbitControl();

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    cubo.rotationFunction(frameCount / 20);

    fill(cubo.color);
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
