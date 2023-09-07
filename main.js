noseX=0;
noseY=0;
difference=0;
rightWX=0;
leftWX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,500);
    canvas.position(560,110);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function draw(){
        background('#969A97');
        textsize(difference);
        fill('#FFE787');
        text('Prakriti Jaiswal',50,400);
    }
    
    function gotPoses(results){
        if (results.length > 0)
        {
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("noseX = "+ noseX+"noseY = "+noseY);
    
            leftWX=results[0].pose.leftWrist.x;
            rightWX=results[0].pose.rightWrist.x;
            difference=floor(leftWX-rightWX);
    
            console.log("leftWristX="+leftWX+"rightWristX="+rightWX+"difference="+difference);
        }
    }
    
    function modelLoaded(){
        console.log('PoseNet Is Initialized');
    }

    




