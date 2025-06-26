let text = "Hallo, du hast es in Raum 2 geschafft, es erwartet dich aber jetzt ein weiteres Rätsel! Was ist Herr AmBROsius Lieblingsfarbe?";
let outputElement = document.getElementById("output");
let i = 0;
let speed = 50;

let cursor = document.createElement("span");
cursor.textContent = "|";
cursor.style.animation = "blink 1s infinite";
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

function typeWriter() {
    if (i < text.length) {
        outputElement.insertBefore(document.createTextNode(text.charAt(i)), cursor);
        playTippSound();
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = () => {
    typeWriter();
};

function falscheTuer() {
    zeigeText("Dies ist nicht Herr AmBROsius Lieblingsfarbe! Versuche es erneut!");
    document.getElementById('weiterText').style.display = 'none';
}

function richtigeTuer() {
    zeigeText("Dies ist Herr AmBROsius Lieblingsfarbe! Trete durch die Tür!");
    document.getElementById('weiterText').style.display = 'none';
    setTimeout(() => {
        window.location.href = 'room3.html';
    }, 1500);
}

function verschlosseneTuer() {
    zeigeText("Diese Tür ist verschlossen, du kannst hier nicht hindurch.");
    document.getElementById('weiterText').style.display = 'none';
}

function zeigeText(text) {
    let textDiv = document.getElementById('textAnzeige');
    let p = document.getElementById('buttonText');
    p.innerText = text;
    textDiv.style.display = 'block';
    setTimeout(() => {
        if (text !== 'Du gehst weiter.') {
            textDiv.style.display = 'none';
        }
    }, 1000);
}