noseX = 0;
noseY = 0;

function preload(){
  mustache = loadImage("https://i.postimg.cc/zXg0zF6Z/mustache.png");
}

function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function draw(){
  image(video,0,0,300,300);
  image(mustache,noseX + 35,noseY + 140,30,30);

}

function take_snapshot(){
  save('Mustache.png');
}

function modelLoaded(){
  console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length>0){
  console.log(results);
  console.log("nose x = " + results[0].pose.nose.x);
  noseX = results[0].pose.nose.x - 50;
}
}