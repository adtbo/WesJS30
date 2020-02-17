const speed =  document.querySelector('.speed');
const bar =  speed.querySelector('.speed-bar');
const video =  document.querySelector('.flex');

speed.addEventListener('mousemove', function(e){
    //console.log(e);
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const playSpeed = percent * (4 - 0.4) + 0.4;
    bar.style.height = Math.round(percent * 100) + '%';
    bar.textContent = playSpeed.toFixed(2) + '×';
    video.playbackRate = playSpeed;
});