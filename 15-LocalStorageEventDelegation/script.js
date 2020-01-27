const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('items')) || [];

function addList(e) {
    e.preventDefault();
    const item = {
        text: (this.querySelector('[name=item]')).value,
        checked: false
    };
    //console.log(item);
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
};

function populateList(itemList = [], displayList) {
    if (itemList.length> 0) {
        displayList.innerHTML = itemList.map((plate, i) => {
            return `
         <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.checked ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>
         </li>
        `;
        }).join('');
    }
};

function clearList() {
    localStorage.clear();
    items = [];
    itemsList.innerHTML = `<li>Loading Tapas...</li>`;
}

function checkAll() {
    items.forEach(e => {
        e.checked = true;
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    items[index].checked = !items[index].checked;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addList);
itemsList.addEventListener('click', toggleDone);

document.querySelector('#clear-list').addEventListener('click', clearList);
document.querySelector('#check-list').addEventListener('click', checkAll);

populateList(items, itemsList);