function preload() {

}

function setup() {
    canvas = createCanvas(380, 380)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BMO7Ih1Fq/model.json",modelLoaded);
}

function draw() {
    image(video, 0, 0, 380, 380);
    classifier.classify(video,Got_Result)
}

function modelLoaded() {
    console.log("model is loaded");
}

function Got_Result(error,result) {
    if(error) {
        console.log(error)
    }
    else{
        console.log(result)
        family_name=result[0].label;
        accuracy=(result[0].confidence*100).toFixed(2);
        document.getElementById("result_object_name").innerHTML=family_name;
        document.getElementById("result_object_accuracy").innerHTML=accuracy+"%";
    }
}