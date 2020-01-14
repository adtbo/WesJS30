const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    /*Array.from(panels).forEach(e => {
        e.classList.remove('open');
    })*/ //used to close other open panel 1
    
    const openPanel = document.querySelector('.panel.open');
    if(openPanel && this != openPanel){
        openPanel.classList.remove('open');
    }; //used to close other open panel 2
    
    this.classList.toggle('open');
}

function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
