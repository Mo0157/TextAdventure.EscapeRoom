
function goToSeiteRedButtonEnding(){
    window.location.href = "EndingRoterButton(ArbeiteBeiAmBROsius).html"
}
function goToSeiteAdventureStart() {
    zeigeText("Game Over, du hast den Alarm ausgelöst und AmBROsius hat dich gefunden, du hast verloren und musst von vorne anfangen.");
    setTimeout(() => {
        window.location.href = "adventureStart.html";
    }, 8000);
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
    }, 5000);
}

function goToSeiteAdventureStartbeta(){
    localStorage.setItem("showAlert", "true");
    window.location.href = "adventureStart.html";
}