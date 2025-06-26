
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
        tippSound.play().catch(() => {
        });
    } catch (e) {
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

function positioniereButtons() {
    const kiste = document.getElementById('kiste');
    const buchschrank = document.getElementById('buchschrank');
    const fenster = document.getElementById('fenster');
    const tuer = document.getElementById('tuer');
    const mappe = document.getElementById('mappe');
    const blau = document.getElementById('blau')
    const rot = document.getElementById('rot')
    const gruen = document.getElementById('gruen')

    function unsichtbarMachen(button) {
        button.style.position = 'absolute';
        button.style.width = '100px';
        button.style.height = '100px';
        button.style.backgroundColor = 'transparent';
        button.style.border = 'none';
        button.style.opacity = '0';
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

    mappe.style.top = '100px';
    mappe.style.left = '50px';
    mappe.style.position = 'absolute';
    unsichtbarMachen(mappe);

    blau.style.top = '100px';
    blau.style.left = '50px';
    blau.style.position = 'absolute';
    unsichtbarMachen(blau);

    rot.style.top = '100px';
    rot.style.left = '50px';
    rot.style.position = 'absolute';
    unsichtbarMachen(rot);

    gruen.style.top = '100px';
    gruen.style.left = '50px';
    gruen.style.position = 'absolute';
    unsichtbarMachen(gruen);
}

typeWriterOutput();