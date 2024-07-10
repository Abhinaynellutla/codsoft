function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function calculate() {
    try {
        let display = document.getElementById('display').value;
        document.getElementById('display').value= eval(display);
    } catch (e) {
        document.getElementById('display').value= 'Error';
    }
}
