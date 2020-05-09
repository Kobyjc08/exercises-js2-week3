function setAlarm() {
    var alarmInput = document.querySelector("#alarmSet");
    var timeRemaining = document.querySelector("#timeRemaining");
    var countDown = alarmInput.value;
    timeRemaining.innerText = "Time Remaining: 00:" + countDown;
    var setTimeRemaining = function() {
        timeRemaining.innerText = "Time Remaining: 00:" + --countDown;
        if (countDown === 0) {
            clearInterval(setTimeRemainingId);
            playAlarm();
            document.body.style.backgroundColor = "red"
        }
    }
    var setTimeRemainingId = setInterval(setTimeRemaining, 1000);

}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
    document.getElementById("set").addEventListener("click", () => {
        setAlarm();
    });

    document.getElementById("stop").addEventListener("click", () => {
        pauseAlarm();
    });
}

function playAlarm() {
    audio.play();
}

function pauseAlarm() {
    audio.pause();
}

window.onload = setup;