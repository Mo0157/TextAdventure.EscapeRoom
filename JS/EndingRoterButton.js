let text = "Du hast den roten Button gedrückt und wurdest von dem Projekt AmBROsius aufgenommen. Jetzt entführst du auch Leute und Rekrutierst sie, um das Projekt riesig zu machen und die Regierung zu stürzen und euren Plan umzusetzen,Html-code als Universelle Sprache festzulegen!";
let labeltext = "";

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
        tippSound.play().catch(() => {
            // Fehler beim Abspielen behandeln oder ignorieren
            // Beispiel: console.warn("Sound konnte nicht abgespielt werden:", e);
        });
    } catch (e) {
        // Fehler beim Setzen von currentTime o.Ä. ignorieren
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