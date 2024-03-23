function showAlert() {
    const textInput = document.getElementById('textInput').value;
    alert('Welcome to the club ' + textInput);
}

const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', showAlert);