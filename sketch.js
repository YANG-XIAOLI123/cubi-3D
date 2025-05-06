/**
 * @typedef {import("./p5/types").Graphics} Graphics
 *
 * @typedef {Object} Cubo
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {number} size
 * @property {string} color
 * @property {function} rotationFunction
 */

//

/** @type {Cubo[]} */
let cubi = [];

let copie = 30;

/** @type {Graphics} */
let g;

//

let font;
function preload() {
  font = loadFont("./IMPACT.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  g = createGraphics(100, 100);

  let distanza = 500;
  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-distanza, distanza),
      y: random(-distanza, distanza),
      z: random(-distanza, distanza),
      size: random(10, 200),
      color: random(["pink", "yellow", "blue"]),
      rotationFunction: random([rotateX, rotateY]),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background("	MediumOrchid");
  orbitControl();
  rotateY(frameCount * 0.001);
  noStroke();

  g.background("black");
  g.textFont(font);
  g.textAlign(CENTER, CENTER);
  g.text("KUN", g.width / 2, g.height / 2);
  g.textSize(40);
  g.fill("DeepPink");

  texture(g);

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);

    let velocita = frameCount * 0.005;
    cubo.rotationFunction(velocita);
    rotateZ(velocita);

    box(cubo.size, 50);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//function mouseClicked() {
//saveGif("GIF", 3);
//}
