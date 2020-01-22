//Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const full = player.querySelector('.full__button');
let mousedown = false;

//Build Function
function togglePlay(){
    if(video.paused){
        video.play();
        //toggle.innerHTML = '❚❚';
    } else {
        video.pause();
        //toggle.innerHTML = '►';
    }
}
/*const method = video.paused ? 'play' : 'pause';
video[method]();*/

function updateButton(){
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
    //console.log(this.value);
}

function handleProgress(){
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime =(e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


//Event Listener
video.addEventListener('click',togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click',togglePlay);
skipButtons.forEach(e => {
    e.addEventListener('click', skip);
}); 

ranges.forEach(e => {
//e.addEventListener('change',handleRangeUpdate);
e.addEventListener('mousemove',handleRangeUpdate);
});

full.addEventListener('click', ()=>{
    if(document.fullscreenElement === player){
        document.exitFullscreen();
    } else {
        player.requestFullscreen();
    }
});

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) =>{
    if(mousedown){
        scrub(e);
    }
} );
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);