async function getTodos(url){
    return await fetch(url)
    .then((response) => {
        if(response.status === 200){
            return response.json()
        }
        throw new Error(`${response.status} - ${response.statusText}`);
    })
};

getTodos("todos.json")
.then((response) => {
    if(!response.length){
        // Add "how to create a new todo" instructions when empty
        return;
    }

    for(let todo of response){
        displayToDo(todo);
    }
    
    searchBoxFunction(response);
})
.catch((error) => {
    console.log(error);
});

function displayToDo({title, id, color, tasks}){
    const fontSize = "250%";
    const grid = document.querySelector('#grid');
    
    const anchor = createBox(id);
    const plusButtom = createPlusButton(grid);
    const content = createContent(tasks, color, title, fontSize, anchor);
    
    anchor.addEventListener('click', (e) =>{
        //Redirect to To-Do edit page
    })
    
    anchor.append(content);
    anchor.append(plusButtom);
    
    grid.append(anchor);

    const todoH1 = content.childNodes[0];
    reduceFontOnOverflow(todoH1, anchor);
};

const newToDo = document.querySelector('.new-todo');
newToDo.addEventListener('click', (e) => {
    displayToDo({title: 'Nuevo TODO!', id: "0123", color:"#000000", tasks:[]})//Temporary
    //Display "Create To-Do" modal
})