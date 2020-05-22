let song;
let analyzer;

function preload(){
  song = loadSound('harrypotter.mp3')
}

function setup() {
  createCanvas(400, 400);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  
}

function draw() {
  background(220);
  let level = analyzer.getLevel();

  ellipse(width / 2, height / 2, 10 + level * 200, 10 + level * 200)
  
}

function mousePressed(){
  song.play();
}

function mouseReleased(){
  song.pause();
}