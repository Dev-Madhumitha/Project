const gameBox = document.getElementById("gameBox");

const snakeLength = 25;
const snake = [];

for (let i = 0; i < snakeLength; i++) {

    const part = document.createElement("div");

    part.classList.add("snake");

    if (i === 0) {
        part.classList.add("head");
    }

    gameBox.appendChild(part);

    snake.push({
        element: part,
        x: 300,
        y: 250
    });
}

let mouseX = 300;
let mouseY = 250;


gameBox.addEventListener("mousemove", function (event) {

    const box = gameBox.getBoundingClientRect();

    mouseX = event.clientX - box.left;
    mouseY = event.clientY - box.top;

});



gameBox.addEventListener("touchmove", function (event) {

    event.preventDefault();

    const box = gameBox.getBoundingClientRect();
    const touch = event.touches[0];

    mouseX = touch.clientX - box.left;
    mouseY = touch.clientY - box.top;

}, { passive: false });


// ANIMATION
// ===============================

function animate() {

    // Snake head follows target

    snake[0].x +=
        (mouseX - snake[0].x) * 0.15;

    snake[0].y +=
        (mouseY - snake[0].y) * 0.15;




    for (let i = 1; i < snake.length; i++) {

        const previous = snake[i - 1];
        const current = snake[i];

        current.x +=
            (previous.x - current.x) * 0.25;

        current.y +=
            (previous.y - current.y) * 0.25;
    }




    for (let i = 0; i < snake.length; i++) {

        snake[i].element.style.left =
            snake[i].x - 9 + "px";

        snake[i].element.style.top =
            snake[i].y - 9 + "px";
    }


    requestAnimationFrame(animate);
}

animate();