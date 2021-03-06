function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
    sliderImages.forEach(e => {
        //halfway trough image
        const slideInAt = (window.scrollY + window.innerHeight) - e.height/2;
        //bottom image
        const imageBottom = e.offsetTop + e.height;
        const isHalfShown = slideInAt > e.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', debounce(checkSlide));