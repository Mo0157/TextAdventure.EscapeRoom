let text = "1 Raum, bitte wähle eine aktion\nBitte wähle eine Option:";

let outputElement = document.getElementById("output");

let i = 0;

let speed = 50;

let cursor = document.createElement("span");
cursor.textContent = "|";
cursor.style.animation = "blink 1s infinite";
outputElement.appendChild(cursor);

function typeWriter() {
    if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));

        // Spiel einen Tipp-Sound ab (wenn du willst)
        // new Audio("deinSound.mp3").play();

        // Erhöhe i um 1, damit der nächste Buchstabe dran ist
        i++;

        // Warte 'speed' Millisekunden und führ die Funktion nochmal aus
        setTimeout(typeWriter, speed);
    }
}

// Starte den Tippvorgang
typeWriter();