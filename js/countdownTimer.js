import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

console.log(typeof flatpickr);

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("datetime-picker");
    const startBtn = document.querySelector("[data-start]");
    const daysSpan = document.querySelector("[data-days]");
    const hoursSpan = document.querySelector("[data-hours]");
    const minutesSpan = document.querySelector("[data-minutes]");
    const secondsSpan = document.querySelector("[data-seconds]");

    let countdownDate;
    let intervalId;

    startBtn.disabled = true;

    flatpickr(input, {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            countdownDate = selectedDates[0];

            if (countdownDate <= new Date()) {
                alert("Please choose a date in the future");
                startBtn.disabled = true;
            } else {
                startBtn.disabled = false;
            }
        },
    });

    function updateTimer() {
        const now = new Date();
        const timeLeft = countdownDate - now;

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            daysSpan.textContent = "00";
            hoursSpan.textContent = "00";
            minutesSpan.textContent = "00";
            secondsSpan.textContent = "00";
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeLeft);
        daysSpan.textContent = addLeadingZero(days);
        hoursSpan.textContent = addLeadingZero(hours);
        minutesSpan.textContent = addLeadingZero(minutes);
        secondsSpan.textContent = addLeadingZero(seconds);
    }

    function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        return {
            days: Math.floor(ms / day),
            hours: Math.floor((ms % day) / hour),
            minutes: Math.floor(((ms % day) % hour) / minute),
            seconds: Math.floor((((ms % day) % hour) % minute) / second),
        };
    }

    function addLeadingZero(value) {
        return String(value).padStart(2, "0");
    }

    startBtn.addEventListener("click", () => {
        intervalId = setInterval(updateTimer, 1000);
        startBtn.disabled = true;
        input.disabled = true;
    });
});
