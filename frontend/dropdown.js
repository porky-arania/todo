const searchBox = document.querySelector('.dropdown input');
const dropdownMenu = document.querySelector('.dropdown-menu');

searchBox.addEventListener('focus', e => {
    dropdownMenu.classList.remove('hidden');
});

searchBox.addEventListener('focusout', e => {
    dropdownMenu.classList.add('hidden')    
});

function searchBoxFunction(todos){
    searchBox.addEventListener('keyup', e => {
        const results = getResults(searchBox.value.toLowerCase().trim(), todos);
        const childs = dropdownMenu.querySelectorAll('.row');
        childs.forEach(child => {
            dropdownMenu.removeChild(child)
        });
        if(results){
            for(let result of results){
                makeRow(result)
            }
        }
    });
};

function getResults(value, todos){
    const results = [];
    if(value === "") return;

    for(let { title, id } of todos){
        if(title.toLowerCase().indexOf(value) !== -1){
            results.push({ title, id });
        }
    }
    return results
};

function makeRow ({ title, id }) {
    const row = document.createElement('div');
    row.innerText = title;
    row.classList.add('row');

    row.addEventListener('mousedown', e => {
        location.href = `/edit/${id}?`
    });

    dropdownMenu.append(row);
}