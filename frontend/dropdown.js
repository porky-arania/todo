const searchBox = document.querySelector('.dropdown input');
const dropdownMenu = document.querySelector('.dropdown-menu');

searchBox.addEventListener('focus', e => {
    if(searchBox.value === "Buscar..."){
        searchBox.value = "";
    }
    dropdownMenu.classList.remove('hidden');
});

searchBox.addEventListener('focusout', e => {
    if(searchBox.value === ""){
        searchBox.value = "Buscar...";
    }
    dropdownMenu.classList.add('hidden');
});

function searchBoxFunction(todos){
    searchBox.addEventListener('keyup', e => {
        const results = getResults(searchBox.value.toLowerCase().trim(), todos);
        const childs = dropdownMenu.querySelectorAll('.row');
        childs.forEach(child => {
            dropdownMenu.removeChild(child)
        });
        if(results){
            console.log(results)
            for(let result of results){
                makeRow(result)
            }
        }
    });
};

function getResults(value, todos){
    const results = [];
    if(value === "") return;

    for(let { title } of todos){
        if(title.toLowerCase().indexOf(value) !== -1){
            results.push(title)
        }
    }
    return results
};

function makeRow (title) {
    const row = document.createElement('div');
    row.innerText = title;
    row.classList.add('row');

    row.addEventListener('click', e => {
        //Redirect to './id'
    });

    dropdownMenu.append(row)
    console.log(title)
}