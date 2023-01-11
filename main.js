
difference=0;
rightWristX=0;
leftWristY=0;

function setup() {
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded");
}
function draw() {
    background("#fdcb6e");
    document.getElementById("font_size").innerHTML="Font size of the text will be = "+difference+"px";
    fill('#00b894');
    textSize(difference);
    text('Ekta',50,400);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}