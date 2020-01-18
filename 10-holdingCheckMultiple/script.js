const inbox = document.querySelector('.inbox');
const noteList = inbox.querySelectorAll('.item input[type=checkbox]');
let lastChecked;

function toggledItem(e){
    let inBetween = false;
    
    noteList.forEach(f => {
        if ((f === e || f === lastChecked) && lastChecked) {
          inBetween = !inBetween;
          //console.log('Starting to check them in between!');
        }
  
        if (inBetween) {
          f.checked = true;
        }
      });

}

noteList.forEach(function (e, index){
    e.addEventListener ('click', function(x){
        if(e.checked && x.shiftKey)
            toggledItem(e);
            lastChecked = e;
    })
});