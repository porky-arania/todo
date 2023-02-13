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
        //Display confirmation modal
    })

    //To-Do "onClick" event
    a.addEventListener('click', (e) =>{
        //Redirect to To-Do edit page
    })
    
    //appends
    content.append(todoTitle);

    foot.append(deleteButton);
    foot.append(progressBar);
    
    a.append(content);
    a.append(foot);
    
    grid.append(a);

    //Reduce font on overflow
    const minFont = 160;
    while(todoTitle.scrollWidth > a.offsetWidth){
        let currFont = parseInt(todoTitle.style.fontSize.slice(0,-1));
        if(currFont < minFont) break;
        todoTitle.style.fontSize = `${currFont - 1}%`;
    }
    todoTitle.style.overflowWrap = "break-word";
};

const newToDo = document.querySelector('.new-todo');
newToDo.addEventListener('click', (e) => {
    displayToDo({title: 'Nuevo TODO!', id: "0123", color:"#000000", tasks:[]})
})