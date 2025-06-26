window.onload = function() {
    alert("Hallo, du hast es in Raum 2 geschafft, es erwartet dich aber jetzt ein weiteres Rätsel! Was ist Herr AmBROsius Lieblingsfarbe?");
    typeWriter();
};

let text = "Erkunde den Raum\nund klicke dich herum ";
let outputElement = document.getElementById("output");

function typeWriter() {
    if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));
        playTippSound();
        i++;
        setTimeout(typeWriter, speed);
    }
}

function falscheTuer() {
    alert('Dies ist nicht Herr AmBROsius Lieblingsfarbe! Versuche es erneut!');
}

function richtigeTuer() {
    alert('Dies ist Herr AmBROsius Lieblingsfarbe! Trete durch die Tür!');
    setTimeout(() => {
        window.location.href = 'room3.html';
    }, 1500);
}

