alert ("Du hast es in den dritten Raum geschafft! Du bist in einem Labor und siehst vor dir einen Computer. Probier rum!");
function positioniereButtons() {
    const mappe = document.getElementById('mappe');

    // Positionen setzen und unsichtbar machen
    mappe.style.top = '100px';
    mappe.style.left = '50px';
    mappe.style.position = 'absolute';
    unsichtbarMachen(mappe);
}

window.onload = () => {
    positioniereButtons();
};

