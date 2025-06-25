let text = "Erkunde den Raum\nund klicke dich herum ";

let outputElement = document.getElementById("output");

let i = 0;

let speed = 50;

let cursor = document.createElement("span");
cursor.textContent = "|";
cursor.style.animation = "blink 1s infinite";
outputElement.appendChild(cursor);

var schlüsselStatus = false

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

// Flag, ob Kiste angeklickt wurde
let kisteAufgemacht = false;

// Buttons per JS positionieren und unsichtbar machen (aber klickbar)
function positioniereButtons() {
    const kiste = document.getElementById('kiste');
    const buchschrank = document.getElementById('buchschrank');
    const fenster = document.getElementById('fenster');
    const tuer = document.getElementById('tuer');

    function unsichtbarMachen(button) {
        button.style.position = 'absolute';
        button.style.width = '100px';
        button.style.height = '100px';
        button.style.backgroundColor = 'transparent'; // unsichtbar
        button.style.border = 'none';
        button.style.opacity = '0'; // komplett unsichtbar
        button.style.cursor = 'pointer';
    }

    // Positionen setzen und unsichtbar machen
    kiste.style.top = '100px';
    kiste.style.left = '50px';
    kiste.style.position = 'absolute';
    unsichtbarMachen(kiste);

    buchschrank.style.top = '100px';
    buchschrank.style.left = '200px';
    buchschrank.style.position = 'absolute';
    unsichtbarMachen(buchschrank);

    fenster.style.top = '250px';
    fenster.style.left = '50px';
    fenster.style.position = 'absolute';
    unsichtbarMachen(fenster);

    tuer.style.top = '250px';
    tuer.style.left = '200px';
    tuer.style.position = 'absolute';
    unsichtbarMachen(tuer);
}

// Wird beim Laden der Seite aufgerufen
window.onload = () => {
    positioniereButtons();
};

function tuerKlicken() {
    if (schlüsselStatus === true) {
        zeigeText('du hund');
        document.getElementById('weiterText').style.display = 'none';
        setTimeout(() => {
            window.location.href = 'room2.html';
        }, 1500);
    } else {
        zeigeText('Die Tür ist verschlossen, finde einen schlüssel.');
    }
}

function behandleErstenButton() {
    zeigeText('Da gibt es nichts interessantes.');
    document.getElementById('weiterText').style.display = 'none';
}

function zeigeText(text) {
    const textDiv = document.getElementById('textAnzeige');
    const p = document.getElementById('buttonText');
    p.innerText = text;
    textDiv.style.display = 'block';

    setTimeout(() => {
        if (text !== 'Du gehst weiter.') {
            textDiv.style.display = 'none';
        }
    }, 5000);
}

// Starte den Tippvorgang
typeWriter();

function schlüsselGefunden() {
    schlüsselStatus = true
    zeigeText('Du hast die Kiste geöffnet. Vielleicht kannst du jetzt weiter n-wort.');
    document.getElementById('weiterText').style.display = 'block';
}