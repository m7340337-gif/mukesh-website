function showMessage() {
    document.getElementById("message").innerHTML =
    "Thank you for visiting my website!";
}
function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("formStatus").innerHTML =
    "Thank you " + name + "! Message received.";
}

