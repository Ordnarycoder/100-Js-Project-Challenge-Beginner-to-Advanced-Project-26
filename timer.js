const submit_button = document.getElementById("submit_button");

submit_button.addEventListener("click", () => {
    let hours = parseInt(document.getElementById("hours").value) || 0;
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    // Prevent invalid negative values
    if (hours < 0 || minutes < 0 || seconds < 0) {
        document.querySelector(".watch").textContent = "Invalid time input!";
        return;
    }

    function watch() {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            document.querySelector(".watch").textContent = 'Time is done ;d';
            return;
        }

        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(timer);
                    document.querySelector(".watch").textContent = 'Time is done ;d';
                    return;
                } else {
                    hours -= 1;
                    minutes = 59;
                    seconds = 59;
                }
            } else {
                minutes -= 1;
                seconds = 59;
            }
        } else {
            seconds -= 1;
        }

        let formattedHours = hours < 10 ? "0" + hours : hours;
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector(".watch").textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    const timer = setInterval(watch, 1000);
});
