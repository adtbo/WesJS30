const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [] ;

function addList(e){
    e.preventDefault();
    const item ={
        text: (this.querySelector('[name=item]')).value,
        checked: false
    };
    //console.log(item);
    items.push(item);
    populateList(items,itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
};

function populateList(itemList = [], displayList) {
    displayList.innerHTML = itemList.map((plate, i) => {
        return `
         <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.checked ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>
         </li>
        `;
    }).join('');
};

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    items[index].checked = !items[index].checked;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items,itemsList);
}

addItems.addEventListener('submit', addList);
itemsList.addEventListener('click',toggleDone);
populateList(items,itemsList);
