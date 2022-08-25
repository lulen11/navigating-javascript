
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(150, 75, 50, 0, Math.PI * 2, true); // face
        ctx.moveTo(110, 75);
        ctx.arc(150, 75, 40, 0, Math.PI, false); // mouth
        ctx.moveTo(140, 65);
        ctx.arc(135, 65, 5, 0, Math.PI * 5, true); // left eye
        ctx.moveTo(170, 65);
        ctx.arc(165, 65, 5, 0, Math.PI * 5, true); // right eye
        ctx.stroke();
    }
}


function inspireYou() {
    fetch("https://api.goprogram.ai/inspiration")
    .then((response) => response.json())
    .then((data) => document.querySelector(".quote").innerHTML = data.quote);
}
