
const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

function voice_reader(){
    var greetings = "こんにちは";
    var speak = new SpeechSynthesisUtterance();
    speak.text = greetings+"、私はイティエルです。";
    speechSynthesis.speak(speak);
};