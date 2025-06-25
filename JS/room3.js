alert ("Du hast es in den dritten Raum geschafft! Du bist in einem Labor und siehst vor dir einen Computer. Probier rum!");
function positioniereButtons() {
    const mappe = document.getElementById('mappe');

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
    mappe.style.top = '100px';
    mappe.style.left = '50px';
    mappe.style.position = 'absolute';
    unsichtbarMachen(mappe);
}

function behandleMappenButton(){

}

window.onload = () => {
    positioniereButtons();
};