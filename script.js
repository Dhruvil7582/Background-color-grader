var css = document.getElementById("css-output");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");
var copyBtn = document.getElementById("copy");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function generateRandomHex() {
    var hexValues = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColors() {
    color1.value = generateRandomHex();
    color2.value = generateRandomHex();
    setGradient();
}

function copyToClipboard() {
    var textToCopy = css.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
        var originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        copyBtn.style.background = "#2ecc71";
        setTimeout(function() {
            copyBtn.textContent = originalText;
            copyBtn.style.background = "rgba(255, 255, 255, 0.1)";
        }, 1500);
    });
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomColors);
copyBtn.addEventListener("click", copyToClipboard);
