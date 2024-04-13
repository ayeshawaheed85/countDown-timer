import * as readlineSync from 'readline-sync';
function countdownTimer(durationInSeconds) {
    const intervalId = setInterval(() => {
        if (durationInSeconds <= 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!");
        }
        else {
            const minutes = Math.floor(durationInSeconds / 60);
            const seconds = durationInSeconds % 60;
            console.log(`Time remaining: ${minutes} minutes, ${seconds} seconds`);
            durationInSeconds--;
        }
    }, 1000);
}
function getUserInput() {
    const duration = parseInt(readlineSync.question("Enter countdown duration in seconds: "));
    if (isNaN(duration) || duration <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        return getUserInput();
    }
    return duration;
}
const countdownDuration = getUserInput();
countdownTimer(countdownDuration);
