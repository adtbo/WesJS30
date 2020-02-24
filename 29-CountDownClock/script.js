let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    //clear existing timer
    clearInterval(countdown);
    
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        //check to stop
        if(secondsLeft < 0){
        clearInterval(countdown);
        return;
        };

        displayTimeLeft(secondsLeft);

    },1000);
}

function displayTimeLeft(seconds){
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor(seconds / 60) % 60;
    const second = seconds % 60;
    const display = `${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;
    document.title = display;
    timerDisplay.textContent = display;
    //console.log({hour, minute, second});
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minute = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minute < 10 ? '0' : ''}${minute}`
}

function startTimer(){
    timer(parseInt(this.dataset.time));
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})