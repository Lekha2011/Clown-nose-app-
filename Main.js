noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.size(350,350);
    Video.hide();

    poseNet = ml5.poseNet(Video , modelloaded);
    poseNet.on("pose" , gotposes);
}
function gotposes(results){
if (results.length > 0){
    console.log(results);
    noseX = (results[0].pose.nose.x) ;
    noseY = (results[0].pose.nose.y) ;
}
}
function modelloaded(){
    console.log("PoseNet is Intialized");
}

function take_snapshot(){
    save("MyFilterImg.png");
}

function draw(){
 image(Video ,0,0,380,380)
 image ( clown_nose , noseX , noseY , 30 , 30);
}

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/J02btYsf/Clown-Nose-Download-PNG-Image-1.png");

}




