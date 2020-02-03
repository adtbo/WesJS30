window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recogs = new SpeechRecognition();
recogs.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);


recogs.addEventListener('result', e => {
    console.log(e.results);
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
});

recogs.addEventListener('end', recogs.start);

recogs.start();