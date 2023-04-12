var nose_x = 0
var nose_y = 0

function preload() {
mustache=loadImage("https://i.postimg.cc/3wcmXvY0/download-removebg-preview-4.png")
tophat=loadImage("https://i.postimg.cc/qMck2H48/360-F-404465722-VGF3xtw-Fi1w-CYm-OI4tl-Hel-W5-CYf-GJj-Je-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}
function draw() {
    image(video, 0, 0, 500, 500)
    image(mustache, nose_x+45, nose_y+100, 180, 125)
    image(tophat, nose_x, nose_y-200, 250, 250)
}

function take_snapshot(){
    save('myFilterImage.png')
}