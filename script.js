var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;



var nameField = document.getElementById('name');
var start_btn = document.getElementById('start')

start_btn.onclick = function() {
  recognition.start();
  console.log('Ready to receive speech input');
}

recognition.onresult = function(event) {
  var userInput = event.results[0][0].transcript;
  nameField.value= userInput;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log('recogniton stopped')
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "please speak gain";
}