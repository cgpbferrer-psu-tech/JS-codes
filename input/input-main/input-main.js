let enteredText;

document.getElementById("submitButton").onclick = function() {
    enteredText = document.getElementById("text").value;
    console.log(enteredText);
    document.getElementById("myh1").textContent = `Hello, ${enteredText}!`
}