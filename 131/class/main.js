var objectDetector = "";
var array = [];
var statuss = "";
var video = "";
function preload(){
  video = createVideo('video.mp4');
}


function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
  video.hide();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  statuss = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  array = results;
}


function draw() {
  image(video, 0, 0, 480, 380);
      if(statuss != "")
      {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < array.length; i++) {
          document.getElementById("status").innerHTML = "Status : Objects Detected";
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ array.length;
 
          fill("#FF0000");
          percent = floor(array[i].confidence * 100);
          text(array[i].label + " " + percent + "%", array[i].x + 15, array[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(array[i].x, array[i].y, array[i].width, array[i].height);
        }
      }
}
