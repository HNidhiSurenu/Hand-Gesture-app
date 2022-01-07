prediction1="" 
prediction2=""
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90  ,
   });
   camera = document.getElementById("camera");
   Webcam.attach( '#camera')
   
   function take_snapshot()
   {
       Webcam.snap(function(data_uri) {
           document.getElementById("result").innerHTML = '<img id= "captured_image" src="' + data_uri+ '"/>'
    });
   }
   console.log('ml5 version:', ml5.version)
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Taz55S27c1/model.json',modelloaded)
    function modelloaded(){
        console.log("modelloaded")
    } 
function speak(){
    var synth=window.speechSynthesis;
    speak1="first prediction is"+prediction1
    speak2="and second prediction is" + prediction2
    var utterthis=new SpeechSynthesisUtterance(speak1+speak2)
    synth.speak(utterthis)
}
function check(){
    img=document.getElementById('captured_image')
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_gesture").innerHTML=results[0].label
        document.getElementById("result_gesture_name2").innerHTML=results[1].label
        prediction1=results[0].label
        prediction2=results[1].label
        speak()
        if(results[0].label=="safe"){
            document.getElementById("update_emoji").innerHTML="&#128077;"
        }
        if(results[0].label=="good"){
            document.getElementById("update_emoji").innerHTML="&#128076;"
        }
        if(results[0].label=="victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;"
        }
        if(results[0].label=="clap"){
            document.getElementById("update_emoji").innerHTML="&#128079;"
        }
        if(results[1].label=="safe"){
            document.getElementById("update_emoji2").innerHTML="&#128077;"
        }
        if(results[1].label=="good"){
            document.getElementById("update_emoji2").innerHTML="&#128076;"
        }
        if(results[1].label=="victory"){
            document.getElementById("update_emoji2").innerHTML="&#9996;"
        }
        if(results[1].label=="clap"){
            document.getElementById("update_emoji2").innerHTML="&#9996;"
        }
    }
}