let text = "Erkunde den Raum\nund klicke dich herum ";
let outputElement = document.getElementById("output");
let i = 0;
let speed = 50;

let cursor = document.createElement("span");
cursor.textContent = "|";
cursor.style.animation = "blink 1s infinite";
outputElement.appendChild(cursor);

let schlüsselStatus = false;

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
        i++;
        setTimeout(typeWriter, speed);
    }
}

function positioniereButtons() {
    const kiste = document.getElementById('kiste');
    const buchschrank = document.getElementById('buchschrank');
    const fenster = document.getElementById('fenster');
    const tuer = document.getElementById('tuer');

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

window.onload = () => {
    positioniereButtons();
    typeWriter();
};

function tuerKlicken() {
    if (schlüsselStatus === true) {
        zeigeText('Die Tür öffnet sich mit einem knarzen und gibt den nächsten raum wieder');
        document.getElementById('weiterText').style.display = 'none';
        setTimeout(() => {
            window.location.href = 'room2.html';
        }, 1500);
    } else {
        zeigeText('Die Tür ist verschlossen, finde einen Schlüssel.');
    }
}

function behandleErstenButton() {
    zeigeText('Da gibt es nichts Interessantes.');
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
    }, 1500);
}

function schlüsselGefunden() {
    schlüsselStatus = true
    zeigeText('Du hast die Kiste geöffnet. Vielleicht kannst du jetzt weiter.');
    document.getElementById('weiterText').style.display = 'block';
}