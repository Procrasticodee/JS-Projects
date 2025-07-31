// The speech will hold the text 
let speech = new SpeechSynthesisUtterance();
// (SpeechSynthesisUtterance) this is an object which allows
// you to convert text to speech using the Web Speech API

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // Fills the voices array with the actual list of voices using the browser's getVoices() method.
    speech.voice = voices[0];
    // set the first voice in the list as the default voice

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.
        name, i)));
        // This line loops through all the available voices and adds them as <option> elements in the <select> dropdown.
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
    // When the user selects a new voice from the dropdown it updates the speech.voice to match the voice ate the voices array.
});

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    //This will convert the text into speech
    window.speechSynthesis.speak(speech);
    // This uses the SpeechSynthesis API to speak the text that was just set in the speech.text
    // The speak() function send the speech object to the browsers speech engine which converts it into audio
});