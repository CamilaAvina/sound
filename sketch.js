let wave;
let button;
let playing;
let slider;

function setup() {
  createCanvas(400, 400);
   background(220);
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
    background(255,0,200);
  }else {
    background(200);
  }
}
function toggle(){
  if (!playing){
    wave.amp(0.5);
    playing = true;
  }else {
    wave.stop();
    wave.amp(0);
    playing = false;
  }
}
