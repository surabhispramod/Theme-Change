const button = document.getElementById("button");

button.addEventListener("click", function() {
    document.body.style.background = randomBg();
});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 50%, 70%)`;
}