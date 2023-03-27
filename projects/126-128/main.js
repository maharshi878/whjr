song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
function preload(){
  song1 = loadSound("music1.mp3");
  song1 = loadSound("music2.mp3");
}
function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
  console.log('poseNet is initialized');
}

function gotPoses(results) {
  if(results.length > 0) {
    console.log(results);
    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreRWrist" + scoreRightWrist + " scoreLWrist = " + scoreLeftWrist);
    leftWristX = results[0].pose.leftWrist.x
    leftWristY = results[0].pose.leftWrist.y
    console.log(" l x="+leftWristX+" l y="+leftWristY);
    rightWristX = results[0].pose.rightWrist.x
    rightWristY = results[0].pose.rightWrist.y
    console.log(" r x="+rightWristX+" r y="+rightWristY);
  }
}

function draw() {
  image(video,0,0,600,500);

  fill('#FF0000');
  stroke('#FF0000');
  circle(rightWristX,rightWristY,20);

  if(rightWristY > 0) {
   play1();
  }
  if(leftwristY > 0) {
   play2();
  }
}

function play1() {
  song1.play();
  song1.setVolume(1);
  song1.rate(1);
}
function play2() {
  song2.play();
  song2.setVolume(1);
  song2.rate(1);
}