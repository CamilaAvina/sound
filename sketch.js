let wave;
let button;
let playing;
let slider;
let env;


function setup() {
  createCanvas(400, 400);
   background(220);
   env = new p5.Envelope():
   env.setADSR(0.5,0.25,0.5,0.1);
   env.setRange(0.8,0);

  wave = new p5.Oscillator();
  slider = createSlider(100,1200,440);
  wave.setType('sine');
  wave.start();
  wave.amp(0);
  wave.freq(300);
  button = createButton('play/pause');
  button.mousePressed(toggle);
}
function draw() {
  wave.freq(slider.value());
  if (playing){
    wave.amp(0.5);
    background(255,0,200);
  }else {
    background(200);
  }
}
function toggle(){
  if (!playing){
    wave.amp(0.5,1);
    playing = true;
  }else {
    wave.stop();
    wave.amp(0);
    playing = false;
  }
}
