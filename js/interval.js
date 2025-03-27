document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startCounter");
    const stopBtn = document.getElementById("stopCounter");
    const counterDisplay = document.getElementById("counter");

    let counter = 0;
    let intervalId;

    startBtn.addEventListener("click", () => {
        intervalId = setInterval(() => {
            counter++;
            counterDisplay.textContent = counter;
        }, 1000);

        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });
});
