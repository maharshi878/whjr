x = 0;
y = 0;
draw_circle = "";
draw_rekt ="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
  document.getElementById("status").innerHTML = "Plejj speakk system ijj listening"
  recognition.start();
}
recognition.onresult = function(event){
  console.log(event);
  var content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The speech has been recognized by the system. Did you speak "+ content+" ??";
  if(content == "circle"){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "The system is drawing the circle"
    draw_circle = "set";
  }
  if(content == "rectangle"){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "The system is drawing the rectangle"
    draw_rekt = "set";
  }
}
function setup(){
  canvas = createCanvas(900, 600);
}
function draw(){
  if (draw_circle == "set"){
    radius = Math.floor(Math.random() *100)
    circle(x,y,radius);
    document.getElementById("status").innerHTML = "The system has drawn the circle";
    draw_circle = "";
  }
  if (draw_rekt == "set"){
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "The system has drawn the rectangle";
    draw_rekt = "";
  }
}
