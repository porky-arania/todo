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
    const a = document.createElement("a");
    a.classList.add("todo");
    a.dataset.id = id;

    const content = document.createElement("div");
    content.classList.add("todo-content");
    
    const foot = document.createElement("div");
    foot.classList.add("todo-foot");
    
    const header = document.createElement("h1");
    header.textContent = title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("delete");

    //Delete button "onClick" event
    deleteButton.addEventListener('click', (e) => {
        document.body.removeChild(a)
        console.log(`Open modal to delete element with id of ${id}`)
    })
    
    //appends
    content.append(header);
    foot.append(deleteButton);
    
    a.append(content);
    a.append(foot);

    document.body.append(a);
};

const newToDo = document.querySelector('.new-todo');
newToDo.addEventListener('click', (e) => {
    displayToDo({title: 'Nuevo TODO!', id: "0123"})
})