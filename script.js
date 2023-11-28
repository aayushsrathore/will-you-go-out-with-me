const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay, see you soon!";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    noBtn.style.display = "none";
    const remainingBtn = document.querySelector('.btn-group button:not(.no-btn)');
    remainingBtn.style.margin = 'auto';

    // Create and append confetti elements
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.transition = "all 0.5s";

    noBtn.offsetWidth;

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    document.body.appendChild(confetti);

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const rotation = Math.random() * 360;
    const color = getRandomColor();

    confetti.style.left = randomX + "px";
    confetti.style.top = randomY + "px";
    confetti.style.transform = `rotate(${rotation}deg)`;
    confetti.style.backgroundColor = color;

    confetti.addEventListener("animationend", () => {
        confetti.remove();
    });
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}