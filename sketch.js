let wave;
let wav2;
let wav3;
let wav4;
let wav5;

let button;
let butt2;
let butt3;
let butt4;
let butt5;
let playing;

//let slider;
let env;
let env2;
let env3;
let env4;
let env5;


function setup() {
  createCanvas(800, 600);
   background(220);
   env = new p5.Envelope();
   env.setADSR(0.5, 0.25, 0.5, 0.1);
   env.setRange(0.8, 0);
   env2 = new p5.Envelope();
   env2.setADSR(1.0, 1.0, 0.5, 0.1);
   env2.setRange(0.5, 0);
   env3 = new p5.Envelope();
   env3.setADSR(1.0, 1.0, 0.5, 0.1);
   env3.setRange(0.5, 0);
   env4 = new p5.Envelope();
   env4.setADSR(1.0, 1.0, 0.5, 0.1);
   env4.setRange(0.5, 0);
   env5 = new p5.Envelope();
   env5.setADSR(1.0, 1.0, 0.5, 0.1);
   env5.setRange(0.5, 0);

  wave = new p5.Oscillator();
  wav2 = new p5.Oscillator();
  wav3 = new p5.Oscillator();
  wav4 = new p5.Oscillator();
  wav5 = new p5.Oscillator();
//  slider = createSlider(100,1200,440);
  wave.setType('sine');
  wave.start();
  wave.amp(env);
  wave.freq(300);
  button = createButton('');
  button.size(150,50,50,50);
  button.mousePressed(toggle);
  wav2.setType('triangle');
  wav2.start();
  wav2.amp(env2);
  wav2.freq(400);
  butt2 = createButton('');
  butt2.size(150,50,50,50);
  butt2.mousePressed(toggle);
  wav3.setType('triangle');
  wav3.start();
  wav3.amp(env2);
  wav3.freq(500);
  butt3 = createButton('');
  butt3.size(150,50,50,50);
  butt3.mousePressed(toggle);
  wav4.setType('triangle');
  wav4.start();
  wav4.amp(env2);
  wav4.freq(600);
  butt4 = createButton('');
  butt4.size(150,50,50,50);
  butt4.mousePressed(toggle);
  wav5.setType('triangle');
  wav5.start();
  wav5.amp(env2);
  wav5.freq(700);
  butt5 = createButton('');
  butt5.size(150,50,50,50);
  butt5.mousePressed(toggle);
}
function draw() {

//  wave.freq();
  //wave2.freq();
  if (playing){
    background(random(255),random(250),random(200));
    for(let i = 0; i<10; i++){
  line(0,0,500,i*150);
  stroke(random(255)-i*15,random(255)-i*10,random(255)-i*20);
  line(800,500, i*150,0);
   line(0,500, i*150,0);
   line(650,0, i*150,0);
}
}
  //  wave.amp(0.5);

  // }else {
  //   background(200);
  // }
}
function toggle(){
if (!playing){
    playing = true;
      env.play();
    } else {
      playing = false;
        env2.play();

  }
}
//  function change(){
//   if (change){
//     background(200);
//     env3.play();
//   } else if {
//   background(150);
//   env4.play();
// // }else {
//   background (100);
//   env5.play();
//}
