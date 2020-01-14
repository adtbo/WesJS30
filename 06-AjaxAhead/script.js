const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const searhInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const defaultHtml = suggestions.innerHTML;

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place =>{
        
        const regex = new RegExp(wordToMatch, 'gi');
        
        return place.city.match(regex) || place.state.match(regex);
    })
}

function numberDisplay(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    if(this.value){
        const matchArray = findMatches(this.value, cities);
        var html = '';
        
        if(!matchArray.length == 0){
        
            html = matchArray.map(place =>{

                const regex = new RegExp(this.value, 'gi');
                const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
                const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

                return `
                    <li>
                        <span class="name">${cityName}, ${stateName}</span>
                        <span class="population">${numberDisplay(place.population)}</span>
                    </li>
                `;
            }).join('');
        }
        else{
            html = `
                <li>
                        <span class="name">no match found</span>
                    </li>
            `
        }
        suggestions.innerHTML = html;
    }
    else{
        suggestions.innerHTML = defaultHtml;
    }
}

//searhInput.addEventListener('change', displayMatches);
searhInput.addEventListener('keyup', displayMatches);