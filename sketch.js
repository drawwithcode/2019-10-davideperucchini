var lego;

function preload() {
  lego = loadModel('assets/lego.obj', true);

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //add webgl
  angleMode(DEGREES);
}


function draw() {
  background(color('#121212'));

  //rotation
  rotateX(180);
  rotateY(frameCount * 1.0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  //lights
  ambientLight(80, 80, 100);
  pointLight("#ff4fff", locX, locY, 50);
  pointLight("#4ff6ff", -locX, -locY, 50);

  noStroke();
  model(lego);

}
