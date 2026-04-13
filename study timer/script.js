const display = document.getElementById("display")
const message =document.getElementById("message")
let timeLeft = 0;
let timer;
function convert () {
    let minutes = Math.floor(timeLeft/60)
    let seconds = Math.floor (timeLeft % 60)
    display.innerHTML = (minutes) + ":" + String(seconds).padStart(2, "0")
}

function countdown () {
    timer = setInterval(function () {
            timeLeft = timeLeft - 1
            convert ()
            if (timeLeft <= 0) {
                clearInterval(timer)
                display.innerHTML = "Time over!"
                message.innerHTML = "Time for a break!"
            }
        }

        , 1000)
}

function startTimer (minutes) {
    clearInterval(timer)
    timeLeft = minutes*60
    convert ()

    countdown()
}
function pauseTimer () {
    clearInterval(timer)
}
    function resumeTimer () {
    clearInterval(timer)
    countdown ()
}

function resetTimer () {
    clearInterval(timer)
    timeLeft = 0;
    display.innerHTML = ""
    message.innerHTML = ""

}

