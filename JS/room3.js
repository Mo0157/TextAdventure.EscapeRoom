alert ("Du hast es in den dritten Raum geschafft! Du bist in einem Labor und siehst vor dir einen Computer. Probier rum!");
function positioniereButtons() {
    const mappe = document.getElementById('mappe');

    function unsichtbarMachen(button) {
        button.style.position = 'absolute';
        button.style.backgroundColor = 'transparent';
        button.style.border = 'none';
        button.style.opacity = '0';
        button.style.cursor = 'pointer';
    }


    mappe.style.top = '100px';
    mappe.style.left = '50px';
    mappe.style.position = 'absolute';
    unsichtbarMachen(mappe);
}

window.onload = () => {
    positioniereButtons();
};