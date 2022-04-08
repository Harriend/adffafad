prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/d1xrWb1fn/model.json" , modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak_this(){
    synth = window.speechSynthesis;
    synth_data_1 = "the first prediction is " + prediction_1;
    synth_data_2 = "and the second prediction is " + prediction_2;
    utter_this = new SpeechSynthesisUtterance(synth_data_1 + synth_data_2);
    synth.speak(utter_this);
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("p1").innerHTML = results[0].label;
        document.getElementById("p1").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak_this()

        if(results[0].label = "cheese"){
            document.getElementById("ep1").innerHTML = "&#9996;";
    }

    if(results[0].label = "Great"){
        document.getElementById("ep1").innerHTML = "&#128077;";
}

if(results[0].label = "nice"){
    document.getElementById("ep1").innerHTML = "&#128076;";
}

if(results[1].label = "cheese"){
    document.getElementById("ep1").innerHTML = "&#9996;";

    if(results[1].label = "nice"){
        document.getElementById("ep1").innerHTML = "&#128076;";
}

if(results[1].label = "Great"){
    document.getElementById("ep1").innerHTML = "&#128077;";
}
}
    }
}