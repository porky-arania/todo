async function getTodos(url){
    const toDos = await fetch(url);
    return toDos.json()
};

getTodos("todos.json")
.then((response) => {
    for(let todo of response){
        displayToDo(todo);
    }
});

function displayToDo({title, id}){
    const grid = document.querySelector('#grid')
    console.dir(grid)
    const fontSize = "250%";
    const a = document.createElement("a");
    a.classList.add("todo");
    a.dataset.id = id;
    
    const content = document.createElement("div");
    content.classList.add("todo-content");
    
    const foot = document.createElement("div");
    foot.classList.add("todo-foot");
    
    const todoTitle = document.createElement("h1");
    todoTitle.textContent = title;
    todoTitle.style.fontSize = fontSize;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("delete");

    //Delete button "onClick" event
    deleteButton.addEventListener('click', (e) => {
        grid.removeChild(a);
        console.log(`Open modal to delete element with id of ${id}`);
    })
    
    //appends
    content.append(todoTitle);
    foot.append(deleteButton);
    
    a.append(content);
    a.append(foot);
    
    grid.append(a);

    //Resize font on overflow
    while(todoTitle.scrollWidth > todoTitle.offsetWidth){
        let currFont = parseInt(todoTitle.style.fontSize.slice(0,-1));
        if(currFont <= 130)break
        todoTitle.style.fontSize = `${currFont - 1}%`;
    }
};

const newToDo = document.querySelector('.new-todo');
newToDo.addEventListener('click', (e) => {
    displayToDo({title: 'Nuevo TODO!', id: "0123"})
})