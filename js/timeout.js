document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startTimeout");
    const cancelBtn = document.getElementById("cancelTimeout");
    const message = document.getElementById("timeoutMessage");

    let timeoutId;

    startBtn.addEventListener("click", () => {
        message.textContent = "Чекаємо 5 секунд...";
        timeoutId = setTimeout(() => {
            message.textContent = "Час вийшов!";
        }, 5000);

        startBtn.disabled = true;
        cancelBtn.disabled = false;
    });

    cancelBtn.addEventListener("click", () => {
        clearTimeout(timeoutId);
        message.textContent = "Таймер скасовано";

        startBtn.disabled = false;
        cancelBtn.disabled = true;
    });
});
