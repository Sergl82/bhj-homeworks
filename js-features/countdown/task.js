const timer = document.getElementById("timer");
const counter = () => timer.textContent -= 1;

let idInterval = setInterval(() => {
    if (timer.textContent > 0) {
        counter();
    }
    else {
        alert(`Вы победили в конкурсе!`);
        clearInterval(idInterval);
    }
}, 1000);