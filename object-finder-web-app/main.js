img=""
status=""
objects=[]
previous_result=""
function preload(){

}
function setup(){
canvas=createCanvas(400,350)
canvas.center()
canvas.position(470,350)
video=createCapture(VIDEO)
video.size(350,350)
video.hide()
}
function draw(){
    image(video, 0, 0, 640, 420)
    if (status != "" ) {

        objectDetector.detect(video,gotResults)
        for(var i=0; i<object.length;i++){
            confidence = Math.round(object[i].confidence * 100) + "%"
            label=object[i].label
            x=object[i].x
            y=object[i].y
            width=object[i].width
            height=object[i].height
            text(label,x,y)
            text(confidence,x,y)
            rect(x,y,width,height)

            
    if (previous_result!=objects[i].label) {
        video.stop()
        objectDetector.detect(gotResult)
    previous_result=object[i].label



    document.getElementById("status").innerHTML="object Detected"
    document.getElementById("count").innerHTML="no of objects detected are "+object.length
    fill("red")
    percentage=floor(object[i].confidence*100)
    text(object[i].label+"  "+percentage+"%",object[i].x,object[i].y)
    noFill()
    stroke("red")
    rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }

    else{
        document.getElementById("status").innerHTML="object mentioned not found"
    }
        }


    
    }

}
function start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML="staus: Detecting Objects"
    object=document.getElementById("input").value;
sythn = window.speechSynthesis
dialogue = " "
dialogue = object[i].label
var utterThis = new SpeechSynthesisUtterance(dialogue)
syth.speak(utterthis)


}
function modelLoaded(){
    console.log("model Loaded")
    status=true
}

function gotResults(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        object=results
    }
    
    }
