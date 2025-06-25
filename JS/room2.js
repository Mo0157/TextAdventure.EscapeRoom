window.onload = function() {
    alert("Hallo, du hast es in Raum 2 geschafft, es erwartet dich aber jetzt ein weiteres Rätsel! Was ist Herr AmBROsius Lieblingsfarbe?");
    typeWriter();
};

let text = "Erkunde den Raum\nund klicke dich herum ";
let outputElement = document.getElementById("output");
let i = 0;
let speed = 50;

let cursor = document.createElement("span");
cursor.textContent = "|";
cursor.className = "blinking-cursor";
outputElement.appendChild(cursor);

// Tipp-Sound hinzufügen
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

function typeWriter() {
    if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));
        playTippSound();
        i++;
        setTimeout(typeWriter, speed);
    }
}

function behandleErstenButton() {
    const textDiv = document.getElementById('textAnzeige');
    textDiv.style.display = 'block';

    setTimeout(() => {
        textDiv.style.display = 'none';
        }, 5000);

    if (zweiterButtonWurdeGedrueckt) {
        document.getElementById('buttonText').innerText = 'Du gehst weiter.';
        setTimeout(() => {
            window.location.href = 'room2.html';
            }, 1500);
    } else {
        document.getElementById('buttonText').innerText = 'Die Tür scheint verschlossen zu sein! Komm später wieder.';
    }
}

function zweitenButtonKlicken() {
    zweiterButtonWurdeGedrueckt = true;
    document.getElementById('weiterText').style.display = 'block';
}