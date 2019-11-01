let wave;


function setup() {
  createCanvas(400, 400);
   background(220);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.amp(1);
  wave.freq(300);
  wave.start();
}

function draw() {
 
}