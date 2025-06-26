let falschefarbe;
let richtigefarbe;
let text = "Willkommen zum Escape-Room Terminal.\nBitte schreibe deinen Namen: Du bist von Herr AmBROsius gefangen genommen worden und wachst gleich auf. Versuche zu entkommen!";
let labeltext = "Choose a username for the OS:";

let outputElement = document.getElementById("output");
let labeloutputElement = document.getElementById("labelOutput");

let i = 0;
let j = 0;
let speed = 50;

let cursor = document.createElement("span");
cursor.textContent = "|";
cursor.className = "blinking-cursor";
outputElement.appendChild(cursor);

let tippSound = new Audio("../Audios/399097__rulfer__click.wav");
tippSound.volume = 0.5;

function playTippSound() {
    try {
        tippSound.currentTime = 0;
        tippSound.play();
    } catch (e) {
        // Fehler ignorieren
    }
}

function typeWriterOutput() {
    if (i < text.length) {
        outputElement.insertBefore(document.createTextNode(text.charAt(i)), cursor);
        playTippSound();
        i++;
        setTimeout(typeWriterOutput, speed);
    } else {
        setTimeout(typeWriterLabel, 500);
    }
}

function typeWriterLabel() {
    labeloutputElement.appendChild(cursor);
    if (j < labeltext.length) {
        labeloutputElement.insertBefore(document.createTextNode(labeltext.charAt(j)), cursor);
        playTippSound();
        j++;
        setTimeout(typeWriterLabel, speed);
    }
}

typeWriterOutput();