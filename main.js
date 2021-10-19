function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3aMkGcbVL/model.json",modelReady);
}
function modelReady() {
    classifier.classify(goResults);
}
function goResults(error,results) {
    console.log('results');
}