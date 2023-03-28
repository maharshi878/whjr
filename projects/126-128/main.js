song1 = "music1.mps";
song2 = "music2.mp3";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
function preload(){
  song = loadSound("music.mp3");

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

  if(scoreRightWrist > 0.2) {
    circle(rightWristX,rightWristY,20);
    play2();
    document.getElementById("song2").innerHTML = "Song 2 Playing Now";
  }
  if(scoreLeftWrist > 0.2) {
   circle(leftWristX,leftWristY,20);
    play1()
   document.getElementById("song1").innerHTML = "Song 1 Playing Now";
  }
}
function play1() {
  song1.play();
}
function play2() {
  song2.play();
}
