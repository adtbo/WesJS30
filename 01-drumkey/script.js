function removeTransition(e){
//    console.log(e);
    if (e.propertyName !== 'transform') return;
//    console.log(e.propertyName);
//    console.log(this);
    this.classList.remove('playing');
}

function playSound(e){
//     console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
//     console.log(audio);
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);