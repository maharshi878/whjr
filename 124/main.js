function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}
function gotPoses(results) {
  if(results.length > 0) {
    console.log(results);
  }
}
function modelLoaded() {
  console.log("posenet isnt initialized HAH");
}

function draw() {
  background('#808080');
}

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nouseX = "+ noseX +"noseY ="+ noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristY = results[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWristX);
    }
}
function draw() {
  background('#969A97');
  document.getElementById("square_side").innerHTML = "Width And Height of the square will be = " + difference +"px";
  fill('#F90093');
  stroke('#F90093');
  square(noseX, noseY, difference);
}
