let text = "Willkommen zum Escape-Room Terminal.\nBitte schreibe deinen Namen:";
let labeltext = "Choose a username for the OS:";

let outputElement = document.getElementById("output");
let labeloutputElement = document.getElementById("labelOutput");

let i = 0;
let j = 0;

let speed = 50;

let cursor  = document.createElement("span");
cursor.textContent = "|";
cursor.style.animation = "blink 1s infinite";
outputElement.appendChild(cursor);

function typeWriterOutput() {
    if (i < text.length) {
        outputElement.insertBefore(document.createTextNode(text.charAt(i)), cursor);

        // Spiel einen Tipp-Sound ab (wenn du willst)
        // new Audio("deinSound.mp3").play();

        // Erhöhe i um 1, damit der nächste Buchstabe dran ist
        i++;

        // Warte 'speed' Millisekunden und führ die Funktion nochmal aus
        setTimeout(typeWriterOutput, speed);
    } else {
        setTimeout(typeWriterLabel, 500)
    }
}

function typeWriterLabel(){
    labeloutputElement.appendChild(cursor);

    if (j < labeltext.length) {
        labeloutputElement.insertBefore(document.createTextNode(labeltext.charAt(j)), cursor);
        j++;
        setTimeout(typeWriterLabel, speed);
    }
}
// Starte den Tippvorgang
typeWriterOutput();