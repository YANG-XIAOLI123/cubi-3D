/**
 * @typedef {object} Cubo
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {number} size
 * @property {string} color
 * @property {function} rotationFunction
 */

//

/**@type {Cubo[]} */
let cubi = [];
let copie = 50;
function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-1000, 1000),
      y: random(-1000, 1000),
      z: random(-1000, 1000),
      size: random(5, 200),
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

    let velocita = frameCount * 0.005;

    cubo.rotationFunction(velocita);
    rotateZ(velocita);

    fill(cubo.color);
    torus(cubo.size, 50);
    noStroke();
    //box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
