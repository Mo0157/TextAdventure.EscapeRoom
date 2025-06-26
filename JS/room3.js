let text = "Du hast es in den dritten Raum geschafft! Du bist in einem Labor und siehst vor dir einen Computer. Probier rum!";
let i = 0;
let speed = 50;

let outputElement = document.getElementById("output");
let cursor = document.createElement("span");
cursor.textContent = "|";
cursor.className = "blinking-cursor";
outputElement.appendChild(cursor);

let currentText = "";

function playTippSound() {
        let tippSound = new Audio("../Audios/399097__rulfer__click.wav");
        tippSound.volume = 0.5;
        tippSound.currentTime = 0;
        tippSound.play().catch(() => {});
}

function typeWriterOutput() {
    if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));
        playTippSound();
        i++;
        setTimeout(typeWriterOutput, speed);
    }
}

typeWriterOutput();

function schonGeguckt() {
        zeigeText("Hier gibt es nichts zu sehen, außer das, wo du schon warst. Schau dich weiter um!");
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
        }, 3000);
}

function gotoseite32(){
        window.location.href = "../HTML/room3.2.html";
}