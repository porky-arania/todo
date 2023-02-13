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

function displayToDo({title, id, color, tasks}){
    const grid = document.querySelector('#grid');
    const fontSize = "250%";

    const a = createBox(id);
    const content = createContent(color);
    const foot = createFooter();
    const todoTitle = createTitle(title, fontSize);
    const deleteButton = createDeleteButton();
    const progressBar = createProgressBar(tasks);

    //Delete button "onClick" event
    deleteButton.addEventListener('click', (e) => {
        grid.removeChild(a);
        console.log(`Open modal to delete element with id of ${id}`);
    })
    
    //appends
    content.append(todoTitle);
    foot.append(deleteButton);
    foot.append(progressBar)
    
    a.append(content);
    a.append(foot);
    
    grid.append(a);

    //Resize font on overflow
    while(todoTitle.scrollWidth > todoTitle.offsetWidth){
        let currFont = parseInt(todoTitle.style.fontSize.slice(0,-1));
        if(currFont <= 150)break
        todoTitle.style.fontSize = `${currFont - 1}%`;
    }
};

const newToDo = document.querySelector('.new-todo');
newToDo.addEventListener('click', (e) => {
    displayToDo({title: 'Nuevo TODO!', id: "0123", color:"#000000", tasks:[]})
})