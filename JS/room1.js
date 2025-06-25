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

function typeWriter() {
    if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
    }
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